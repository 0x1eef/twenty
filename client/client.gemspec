# frozen_string_literal: true

Gem::Specification.new do |gem|
  gem.name = "twenty-client"
  gem.authors = ["0x1eef"]
  gem.email = ["0x1eef@protonmail.com"]
  gem.homepage = "https://github.com/0x1eef/twenty#readme"
  gem.version = "0.5.3"
  gem.licenses = ["0BSD"]
  gem.files = File.binread(File.join(__dir__, "MANIFEST"))
                  .each_line
                  .flat_map { Dir.glob(_1.chomp) }
                  .select { File.file?(_1) }
  gem.require_paths = ["lib"]
  gem.summary = "HTTP client"
  gem.description = gem.summary
  gem.add_development_dependency "nanoc", "~> 4.12"
  gem.add_development_dependency "sass", "~> 3.7"
  gem.add_development_dependency "rainpress", "~> 1.0"
  gem.add_development_dependency "nanoc-webpack.rb", "~> 0.10"
  gem.add_development_dependency "listen", "~> 3.8"
  gem.add_development_dependency "standard", "~> 1.35"
end
