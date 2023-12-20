# frozen_string_literal: true

Gem::Specification.new do |gem|
  gem.name = "twenty-backend"
  gem.authors = ["0x1eef"]
  gem.email = ["0x1eef@protonmail.com"]
  gem.homepage = "https://github.com/0x1eef/twenty#readme"
  gem.version = "0.1.0"
  gem.licenses = ["0BSD"]
  gem.files = `git ls-files`.split($/)
  gem.require_paths = ["lib"]
  gem.summary = "twenty: backend"
  gem.description = gem.summary
  gem.add_runtime_dependency "activerecord", "~> 7.1"
  gem.add_runtime_dependency "sqlite3", "~> 1.6"
  gem.add_runtime_dependency "webrick", "~> 1.8"
  gem.add_development_dependency "test-unit", "~> 3.5.7"
  gem.add_development_dependency "standard", "~> 1.13"
  gem.add_development_dependency "rake", "~> 13.1"
end
