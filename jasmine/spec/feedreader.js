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
		/* Tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty. 
		 */
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		/* #8 Write a test that loops through each feed in the allFeeds 
		 * object and ensures it has a URL defined and that the URL is not empty.
		 *
		 * This loops through each feed
		 * in the allFeeds object and ensures it has a URL defined
		 * and that the URL is not empty.
		 */
		 it('URLs are defined and NOT Empty', function() {
			allFeeds.forEach(function(feed){
			  expect(feed.url).toBeDefined();
			  expect(feed.url.length).not.toBe(0);
			});
		  });
		/* #9 Write a test that loops through each feed in the allFeeds 
		 * object and ensures it has a name defined and that the name is not empty.
		 *
		 * This loops through each feed
		 * in the allFeeds object and ensures it has a name defined
		 * and that the name is not empty.
		 */
		it('Name are defined and NOT Empty', function() {
			allFeeds.forEach(function(feed){
			  expect(feed.name).toBeDefined();
			  expect(feed.name.length).not.toBe(0);
			});
		  });
    });


    /* #10 Write a new test suite named "The menu". */
	describe('The Menu', function() {
        /* #11 - Ensures the menu element is
         * hidden by default. Class ".menu-hidden" is applied to the body
		 * which moves the menu off the screen
         */
		 it('Hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
			expect($('.menu').position().left).toBeLessThan(0);
		  });
		
         /* #12 - Ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		 it('Menu Toggle Hide/Show', function() {
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(false);
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(true);
		 }); 		
	});
	
    /* #13 Write a new test suite named "Initial Entries" */
	describe('Initial Entries', function() {
        /* #14 Ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         *
		 * Load the initial feed using done(), callback to handle asynchronicity
		 */
		 beforeEach(function(done) {
           loadFeed(0, function () {                                 
              done();
            });
        });
        
        it("Contains at least one entry", function() {
          expect($('.entry').length).toBeGreaterThan(0);
          done();
        });
    });
		
	});
    /* #15 Write a new test suite named "New Feed Selection" */
	describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
		
	});
}());
