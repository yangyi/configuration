gem "sqlite3-ruby", :lib => "sqlite3"
gem 'mysql'
gem 'authlogic'
gem 'RedCloth', :lib => 'redcloth'
gem 'will_paginate'
gem 'jelly'
gem 'workflow'
gem 'formtastic'
gem 'validation_reflection'
gem 'has_scope'
gem 'paperclip'
gem "inherited_resources", :version => "1.0.2"
gem "responders", :version => "0.4.2"
gem "declarative_authorization"
gem "cucumber"
gem "capybara"

generate :jelly
generate :cucumber

git :init

file ".gitignore", <<-END
.DS_Store
log/*.log
tmp/**/*
config/database.yml
db/*.sqlite3
END

run "touch tmp/.gitignore log/.gitignore vendor/.gitignore"
run "cp config/database.yml config/example_database.yml"
run "rm public/index.html"
run "haml --rails ."

generate :controller, "welcome index"
route "map.root :controller => 'welcome'"

git :add => ".", :commit => "-m 'initial commit'"
