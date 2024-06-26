#!/usr/bin/env ruby

namespace :gem do
  require_relative "../lib/builders"
  root = File.realpath File.join(__dir__, "..", "..", "..")
  version = File.binread(File.join(root, "VERSION")).chomp

  desc "Build gemspec"
  task :gemspec, [:version] do |t, args|
    GemSpec.call(args.version || version)
  end

  desc "Copy files to stage directory"
  task :copy, [:version] => [:gemspec] do |t, args|
    Copy.call(args.version || version)
  end

  desc "Build gems"
  task :build, [:version] => [:set_env, "nanoc:clean", "nanoc:build", :copy] do |t, args|
    Build.call(args.version || version)
  end

  desc "Deploy gems"
  task :deploy, [:version] => [:build] do |t, args|
    Deploy.call(args.version || version)
  end

  task :set_env, [:version] => [:set_version] do |t,args|
    ENV["buildenv"] ||= "production"
  end

  task :set_version, [:version] do |t,args|
    next unless args.version
    File.binwrite File.join(root, "VERSION"),
                  "#{args.version}\n"
  end
end
