# Excalibur
This project have the proporse to teach how the ecosystem of an api and frontend tests works.

API will be made in Rails and Front in React.

# API Version
Ruby 3.1.2
Rails 7.0.6

# API basic start
If you are new to Rails and need help, go to:
Rails doc (https://www.ruby-lang.org)
Rbenv version manager (https://github.com/rbenv/rbenv#readme)

rails new excalibur-api --api --database=postgresql
rails db:create

Check database:
psql -U postgres excalibur_api_development

API basic structure (example):
rails g scaffold brand name:string
rails g scaffold category name:string
rails g scaffold product name:string description:string price:decimal brand:references category:references 

rails db:migrate

Working...


