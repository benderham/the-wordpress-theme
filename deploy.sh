#!/bin/bash

# wordpress paths
WP_PATH='/home/Longtail/Websites/wordpress/'

# configuration
PLUGINS=('hello-dolly' 'contact-form-7' 'really-simple-captcha')
WP_VERSION='4.4'

# installing npm packages
sudo npm install
sudo bower install --allow-root
sudo grunt build

#copy wp-content
sudo cp -Rv app/wordpress/wp-content/ $WP_PATH

#go to the worpress root folder
cd $WP_PATH

#check wordpress version
echo 'Check WP version...'
echo 'Current version is ' $(wp core version)
if [ "$(wp core version)" != "$WP_VERSION" ]
then
	echo 'Updating Wordpress to the version:' $WP_VERSION
	sudo wp core update --version=$WP_VERSION --force --allow-root
	echo 'Worpress has been updated to the version '$WP_VERSION
else
	echo 'Worpress version is up-to-date'
fi

#install plugins for wordpress
for i in "${PLUGINS[@]}"
do
	if ! $(wp plugin is-installed $i); then
		echo 'Installing and activating plugin ' $i
		sudo wp plugin install $i --activate --allow-root
	else
		echo 'Plugin is installed: '$i
	fi
done

