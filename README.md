Udacity Project 6:  TESTING
Feed Reader using Jasmine
Sandy Gross



## Project Learning

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.
Here we use Jasmine to use "test-driven-development".  You'll find that code under the jasmine/spec folder.  Tests are created in feedreader.js.

## Running Application
Download / clone code to desktop
Run index.html

## These are the tests run:
- RSS feeds object:
    -are defined
    -URL property are defined
    -Name property are defined

- The menu:
    -is hidden by default
    -should toggle visible/hidden when clicked

-Initial Entries:
    -feed elements are load asynchronously
    
## Expected output:
-New Feed Selection:
    -new feed content is changed when choosing different index
Jasmine will run my tests and provide the following results if the run is successful
	9 specs, 0 failures
	Jasmine__TopLevel__Suite
		RSS Feeds
	RSS feeds are defined
	Feed URLs are defined
	Feed URLs are not empty
	Feed Names are defined
	Feed Names is not empty
	The menu
	Menu is hidden by default
	Menu alternates visibility on click
	Initial Entries
	Asynch: at least 1 .entry element added
	New Feed Selection
	New feed when content changes

# Sources:
1. Completed Udacity couse JavaScript Testing - part2 was very helpful
2. I googled Jasmine and read some documentation to get a better understanding of the different tests and how to put them together.
3. I looked though github to see how other students were doing things but there wasnt much variety.

I enjoy testing and would like to explore more in this area.
