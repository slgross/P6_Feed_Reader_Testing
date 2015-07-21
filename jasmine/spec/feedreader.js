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
		 * empty.
		 */
		it('RSS feeds are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});


		/* Test that loops through each feed
		 * in the allFeeds object and ensures it has a URL defined
		 * and that the URL is not empty.
		 * Make into two distinct tests or feedback wont let you
		 * know which failed
		 */
		it('Feed URLs are defined', function(){
			allFeeds.forEach(function(feed){
				expect(feed.url).toBeDefined();
			});
		});
		it('Feed URLs are not empty', function(){
			allFeeds.forEach(function(feed){
				expect(feed.url.length).not.toBe(0);
			});
		});

		/* Test that loops through each feed
		 * in the allFeeds object and ensures it has a name defined
		 * and that the name is not empty.
		 * Use two tests to get distinct results
		 */
		it('Feed Names are defined', function(){
			allFeeds.forEach(function(feed){
				expect(feed.name).toBeDefined();
			});
		});
		it('Feed Names is not empty', function(){
			allFeeds.forEach(function(feed){
				expect(feed.name.length).not.toBe(0);
			});
		});
	});

	describe('The menu', function() {
		/* New test suite named "The menu" */

		/* Test that ensures the menu element is
		 * hidden by default. Analyze the HTML and
		 * the CSS to determine how we're performing the
		 * hiding/showing of the menu element.
		 */
		it('Menu is hidden by default', function(){
			expect($('body').hasClass("menu-hidden")).toBe(true);
		});


		/* Test that ensures the menu changes
		* visibility when the menu icon is clicked. This test
		* should have two expectations: does the menu display when
		* clicked and does it hide when clicked again.
		*/
		it('Menu alternates visibility on click', function(){
			$('.menu-icon-link').trigger('click');
				expect($('body').hasClass("menu-hidden")).toBe(false);
			$('.menu-icon-link').trigger('click');
				expect($('body').hasClass("menu-hidden")).toBe(true);
		 });
	});


	/* Test suite named "Initial Entries" */
	describe('Initial Entries', function(){
		beforeEach(function(done){
			loadFeed(0, done);
		});

		/* Test that ensures when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 * Remember, loadFeed() is asynchronous so this test will require
		 * the use of Jasmine's beforeEach and asynchronous done() function.
		 */
		it('Asynch: at least 1 .entry element added', function(){
			expect($(".entry").length).not.toBe(0);
		});
	});

		/* New test suite named "New Feed Selection" */

		/* Test that ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 * Remember, loadFeed() is asynchronous.
		 */
	describe('New Feed Selection', function(){
		var beforeEntry;

		/* actually testing header title - so load old header (zero)
		 * and then check that new header (one) has content too
		 */

		beforeEach(function(done){
			$('.feed').empty();
			beforeEntry = $('.feed a').children('.entry');

			loadFeed(0, function() {
				loadFeed(1, function(){
					done();
				});
			});
		});

		/* two names should be different */
		it('New feed when content changes', function(done){
			expect($('.feed a').children('.entry')).not.toBe(beforeEntry);
		});

		afterEach(function(done){
			loadFeed(0, done);
		});
	});
}());