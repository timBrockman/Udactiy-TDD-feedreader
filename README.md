# Udacity's feed reader testing ([TB]DD) project with Jasmine

To run these tests simply visit: [https://timBrockman.github.io/Udactiy-TDD-feedreader/](https://timBrockman.github.io/Udactiy-TDD-feedreader/)

Otherwise, you can clone the repo, host it locally, and direct your browser to the index.html file.

======

# Project Overview

The project objectives were to write a series of tests for a pre-existing project using Jasmine.
In order to have experience writing tests, this exercise introduces us to writing tests based on a spec that the starter code would have met.

## This project tests the following things:

  - RSS Feeds
    - are defined
    - have url properties
    - Urls have some assigned value
    - have name properties
    - Names have some assigned value
  - The Menu
    - is hidden by default
    - displays when clicked
    - is hidden when clicked again
  - The initial entries
    - should call loadFeed and display one or more entries on completion
  - New Feed Selection
    - should change content when different feeds are loaded

For this project I did my best to keep the helper functions for the tests simple and DRY.
