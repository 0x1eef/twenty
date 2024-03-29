# frozen_string_literal: true

Gem::Specification.new do |gem|
  gem.name = "twenty.rb"
  gem.authors = ["0x1eef"]
  gem.email = ["0x1eef@protonmail.com"]
  gem.homepage = "https://github.com/0x1eef/twenty#readme"
  gem.version = "0.3.5"
  gem.licenses = ["0BSD"]
  gem.files = [
    *Dir.glob(File.join(__dir__, "lib", "*.rb")), 
    *Dir.glob(File.join(__dir__, "lib", "twenty", "**","*.rb"))
  ].select { File.file?(_1) }
  gem.summary = "Minimal project management that runs on your computer"
  gem.description = gem.summary
  gem.add_runtime_dependency "twenty-server", "0.3.5"
  gem.add_runtime_dependency "twenty-client", "0.3.5"
  gem.add_runtime_dependency "twenty-cli", "0.3.5"
end
