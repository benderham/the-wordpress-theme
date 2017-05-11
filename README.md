# The WordPress Theme
The WordPress Theme is a blank canvas theme for WordPress. It is designed as a clean slate for you to develop a customised WordPress theme. 

This README.md also doubles up as a template for you to use on your project.

Please feel free to contribute to this project, just fork it and go nuts!
Any bugs, issues, questions, suggestions, praise (sorry complaints department closed permanently), [Email Me!](mailto:ben@benderham.com)

### Included Bits and Pieces
[jQuery](http://www.jquery.com) - Queued up, just the way WordPress likes it to be.
[Modernizr](http://modernizr.com)  

### Recommended Coding Standards and Documentation
[HTML5](http://html5doctor.com/element-index/)

[SASS](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

###Folder Structure
	
	wordpress-project/  
	-- app/
	-- bower_components/
	-- node_modules/  
	
	---- website-source/
	------ fonts/
	------ images/
	------ js/
	-------- vendor/
	------- scss/
	------- root-images/
	------- theme-templates/
	
	---- wordpress/
	------ wp-content/
	-------- themes/
	---------- the-theme/

### Important Files
`gulpfile.js` and '/gulp'
Configuration of Gulp tasks.

`package.json`  
Configuration of node dependencies.

### Build Tools & Preprocessors

**[SASS](http://sass-lang.com/guide)**  
An extension of CSS that adds power and elegance to the basic language. It allows to use variables, nested rules, mixins, inline imports, and more.

**[Gulp](http://gulpjs.com/)**  
Automates tasks such as minification, concatenation, compression, compilation, browser refreshing etc.

**Recommended: [WP-CLI](http://wp-cli.org)**  
WP-CLI is a set of command-line tools for managing WordPress installations. You can update plugins, set up multisite installs and much more, without using a web browser.

### JavaScript Libraries Used
[jQuery](http://www.jquery.com)  
[Modernizr](http://modernizr.com)  

## Get Started
***
### STOP!
Make sure that your machine has **ALL** of the Build Tools and Preprocessors set up **BEFORE** continuing further. 

### Create Working Folder and GIT Repository

Clone this GIT Repository. [Don't know how?](https://confluence.atlassian.com/display/BITBUCKET/Clone+a+repository)

### Local Development Environment 
  
[VCCW](http://vccw.cc/)

#### Configuration

1. Edit the `site.yml`.
2. Run `vagrant up`.

### Run NPM Install (or why not try Yarn?)

	$ npm install

### Run Gulp

Run the default gulp task and start developing! 
	
	$ gulp

## Important Notes
***

If you wish to preview and test the production version of the site you should run the Build Gulp Process. 

	$ gulp build:production

## Changelog
***
**v2.0** - Migrated to Gulp instead of Grunt.

**v1.1** - A few minor tweaks to README.md and removal of Bourbon Neat, in favour of using flexbox for layouts.

**v1.0** - Nothing has changed yet! We are only just getting this party started!
