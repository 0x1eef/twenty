require "bundler/setup"
require "twenty/cli"
require "twenty/client"
require "twenty/server"
require "ryo"
require "ryo/yaml"

load "host/rake/tasks/schema.rake"
load "host/rake/tasks/nanoc.rake"
load "host/rake/tasks/gem.rake"
load "host/rake/tasks/rubocop.rake"
load "host/rake/tasks/server.rake"
