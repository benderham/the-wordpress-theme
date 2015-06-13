## Project Overview
***
Website built on a custom WordPress Template.

### Development Team

**Lead Developer**  
Ben Derham - <ben@benderham.com>

**Contributors**


### Build Tools & Preprocessors

**[SASS](http://sass-lang.com/guide)**  
An extension of CSS that adds power and elegance to the basic language. It allows to use variables, nested rules, mixins, inline imports, and more.

**[Grunt](http://gruntjs.com/getting-started)**  
Automates tasks such as minification, concatenation, compression, compilation, browser refreshing etc.

**[Bower](http://bower.io/#getting-started)**  
Bower works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you’re looking for.

**[WP-CLI](http://wp-cli.org)**  
WP-CLI is a set of command-line tools for managing WordPress installations. You can update plugins, set up multisite installs and much more, without using a web browser.

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
`Gruntfile.js`  
Configuration of Grunt tasks.

`package.json`  
Configuration of node dependencies.

`bower.json`  
Configuration of bower dependencies.

`wordpress.txt`  
Details of the WordPress installation including: Version Number, Local Database Connection Details and Plugins. Use this file to determine the settings for your local installation. **Updated WordPress or installed a plugin?? UPDATE THIS FILE TOO!**


#### JavaScript Libraries Used
[jQuery](http://www.jquery.com)  
[Modernizr](http://modernizr.com)  


## Get Started
***
###STOP!
Make sure that your machine has **ALL** of the Build Tools and Preprocessors set up **BEFORE** continuing further.

###Create Working Folder and GIT Repository

Clone this GIT Repository. [Don't know how?](https://confluence.atlassian.com/display/BITBUCKET/Clone+a+repository)


###Local Development Environment 
  
Prepare a local development environment inside `app/wordpress/`, using your favourite local environment tool.   
  
***IMPORTANT: Only set up your Working Environment (Virtual Host, Folder Location, PHP Version) and Import Database. Install WordPress using WP-CLI and information in wordpress.txt in the next step.***

[MAMP/MAMP Pro - OSX](http://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP)  
[WampServer - Windows](https://make.wordpress.org/core/handbook/installing-a-local-server/installing-wampserver/)

###Download & Configure WordPress

Install WordPress using WP-CLI and the information on `wordpress.txt`

	$ cd app/wordpress/
	$ wp core download --version=x.xx
	$ wp core config --dbname=database_name --dbuser=root --dbpass=password --dbhost=127.0.0.1
	
If for some reason configuring on the command line does not work, then go to `http://localhost/longtail-site` and configure using the WordPress GUI.

###Run Grunt

Run the default grunt task and start developing! 
	
	$ grunt

The `Gruntfile.js` is commented throughout, each module used is well documented.


## Important Notes
***
Only the contents of `longtail-project/ root` (except `bower_components/` and `node_modules/`) and `app/longtail-theme-source/` are kept under version control. This is so that WordPress and compiled files are not commited to the repository. 

If you wish to preview and test the production version of the site you should run the Build Grunt Process. 

	$ grunt build



## Changelog
***
**v1.0** - Nothing has changed yet! We are only just getting this party started!
