#RADD [![Build Status](https://travis-ci.org/jesalg/RADD.png?branch=master)](https://travis-ci.org/jesalg/RADD)

A basic example of how to use Rails, Devise and Angular.js in conjunction. 

This architecture treats Rails as a JSON API and AngularJS as the front-end framework which will do view rendering. 

More details on my blog posts:

- [Authentication with Rails, Devise and AngularJS][1]
- [Architecting RESTful Rails 4 API][2]

###Demo

http://radd.herokuapp.com/

###Install

``bundle install``

``bundle exec rake db:setup``

``rails s``

###Testing

Run this to execute the API test suite:

``rake db:test:prepare``

``rspec spec``

###Documentation

API documentation is located at `/docs` and is generated using passing acceptance tests.

Run this to regenerate the docs: `rake docs:generate`

  [1]: http://jes.al/2013/08/authentication-with-rails-devise-and-angularjs/
  [2]: http://jes.al/2013/10/architecting-restful-rails-4-api/

