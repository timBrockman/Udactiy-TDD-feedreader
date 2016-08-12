/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         function checkEachForProperty(array, property){
           var isPassing = true;
           array.forEach(function(feed){
             isPassing = isPassing && feed.hasOwnProperty(property);
           });
           return isPassing;
         }
         function checkEachForNotEmpty(array, property){
           var isPassing = true;
           array.forEach(function(feed){
             console.log(feed[property]);
             isPassing = isPassing && (feed[property] != '');
           });
           return isPassing;
         }


         it('Have defined url properties', function(){
           expect(checkEachForProperty(allFeeds, 'url')).toBe(true);
         });
         it('Urls are not empty', function(){
           expect(checkEachForNotEmpty(allFeeds, 'url')).toBe(true);
         });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('Have defined name properties', function(){
           expect(checkEachForProperty(allFeeds, 'name')).toBe(true);
         });
         it('Names are not empty', function(){
           expect(checkEachForNotEmpty(allFeeds, 'name')).toBe(true);
         });


    });


    /* This suite tests "The menu" */
    describe('The menu', function(){


        /* This test ensures the menu element is
         * hidden by default.
         */
         it('should be hidden by default', function(){
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });
         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: the menu displays when
          * clicked and hides when clicked again.
          */
          function menuToggleOnClick(){
            $('a.menu-icon-link').click();
            return $('body').hasClass('menu-hidden');
          }
          it('should display when clicked', function(){
            expect(menuToggleOnClick()).toBe(false);
          });
          it('should be hidden when clicked again', function(){
            expect(menuToggleOnClick()).toBe(true);
          });

    });
    /* This helper function checks for at leasty one entry in the feed container */
    function hasEntries(){
      var entries = $('.feed .entry');
      if(entries.length > 0){
        return true;
      }
      return false;
    }
    /* This test suite is named "Initial Entries" */
    describe("Initial Entries", function(){
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done){
          loadFeed(0, function(){
            done();
          });
        });
        it('should call loadFeed and display one or more entries on completion', function(){
          expect(hasEntries()).toBe(true);
        });
    });



    describe("New Feed Selection", function(){
        /* This test ensures when a new feed is loaded
         * by the loadFeed function, the content actually changes.
         */
        var secondLoad;
        var firstLoad;
        beforeEach(function(done){
          loadFeed(0, function(){
            firstLoad = $('.entry').html();
          });
          loadFeed(1, function(){
            secondLoad =  $('.entry').html();
            done();
          });

        });

        it('should change content when new feed is loaded', function(){
          expect(firstLoad).not.toBe(secondLoad);
        });
    });
}());
