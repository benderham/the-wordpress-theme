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

`wordpress.txt`  
Experimental file for testing a WIP deploy script.  
Details of the WordPress installation including: Version Number, Local Database Connection Details and Plugins. Use this file to determine the settings for your local installation. **Updated WordPress or installed a plugin?? UPDATE THIS FILE TOO!**

### Build Tools & Preprocessors

**[SASS](http://sass-lang.com/guide)**  
An extension of CSS that adds power and elegance to the basic language. It allows to use variables, nested rules, mixins, inline imports, and more.

**[NPM](https://docs.npmjs.com/)**

npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.

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
  
Prepare a local development environment inside `app/wordpress/`, using your favourite local environment tool.   
  
***IMPORTANT: Only set up your Working Environment (Virtual Host, Folder Location, PHP Version) and Import Database. Install WordPress using WP-CLI and information in wordpress.txt in the next step.***

[MAMP/MAMP Pro - OSX](http://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP)  
[WampServer - Windows](https://make.wordpress.org/core/handbook/installing-a-local-server/installing-wampserver/)

### Download & Configure WordPress

Install WordPress using WP-CLI and the information on `wordpress.txt`

	$ cd app/wordpress/
	$ wp core download --version=x.xx
	$ wp core config --dbname=database_name --dbuser=root --dbpass=password --dbhost=127.0.0.1
	
If for some reason configuring on the command line does not work, then configure using the WordPress GUI.

### Run NPM Install (or why not try Yarn?)

	$ npm install

### Run Gulp

Run the default gulp task and start developing! 
	
	$ gulp


## Important Notes
***
Only the contents of `wordpress-project/ root` (except `node_modules/`) and `app/wordpress-theme-source/` are kept under version control. This is so that WordPress and compiled files are not commited to the repository. 

If you wish to preview and test the production version of the site you should run the Build Grunt Process. 

	$ gulp build:production

## Changelog
***
**v2.0** - Migrated to Gulp instead of Grunt.

**v1.1** - A few minor tweaks to README.md and removal of Bourbon Neat, in favour of using flexbox for layouts.

**v1.0** - Nothing has changed yet! We are only just getting this party started!
