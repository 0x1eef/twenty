# frozen_string_literal: true

Gem::Specification.new do |gem|
  gem.name = "twenty-cli"
  gem.authors = ["0x1eef"]
  gem.email = ["0x1eef@protonmail.com"]
  gem.homepage = "https://github.com/0x1eef/twenty#readme"
  gem.version = "0.1.0"
  gem.licenses = ["0BSD"]
  gem.files = `git ls-files`.split($/)
  gem.require_paths = ["lib"]
  gem.summary = "twenty: command-line interface"
  gem.description = gem.summary
  gem.add_runtime_dependency "cmd.rb", "~> 0.2"
  gem.add_development_dependency "test-unit", "~> 3.5.7"
  gem.add_development_dependency "yard", "~> 0.9"
  gem.add_development_dependency "redcarpet", "~> 3.5"
  gem.add_development_dependency "standard", "~> 1.13"
  gem.add_development_dependency "rake", "~> 13.1"
end
