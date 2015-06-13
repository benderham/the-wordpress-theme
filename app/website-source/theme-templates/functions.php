<?php

/**	
	* Contents of this functions file:
	* The Launch
	* The Head Cleanup
	* Remove WordPress version from RSS
	* Remove WordPress version from Scripts
	* CSS & Javascript Assests
	* Theme Support
	* Menus & Navigation
	* Custom Thumbnail Sizes
	* Custom Post Types & Taxonomies
	* is_blog(); -- https://gist.github.com/wesbos/1189639
	* ACF Options Page
	* Contact Form
**/
	
/** 
 * The Launch
 **/
add_action('after_setup_theme','the_launch');

function the_launch() {
	// Launch The Head Clean Up
  add_action('init', 'the_head_cleanup');
  
  // Remove WordPress version from RSS
  add_filter('the_generator', 'the_rss_version');
	
	// Enqueue base CSS & Javascripts
	add_action('wp_enqueue_scripts', 'the_assets');
	
	// Launch Theme Supports AFTER theme setup
	the_theme_supports();
}

/** 
 * The Head Cleanup - clean up of WordPress head, adapted from Bones Theme
 **/
function the_head_cleanup() {
	// EditURI link
	remove_action('wp_head', 'rsd_link');
	// windows live writer
	remove_action('wp_head', 'wlwmanifest_link');
	// index link
	remove_action('wp_head', 'index_rel_link'); 
	// previous link
	remove_action('wp_head', 'parent_post_rel_link', 10, 0);
	// start link
	remove_action('wp_head', 'start_post_rel_link', 10, 0);
	// links for adjacent posts
	remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
	// WP version
	remove_action('wp_head', 'wp_generator');
	
	// Remove WordPress version from css
	add_filter('style_loader_src', 'remove_wp_ver_css_js', 9999);
	// Remove WordPress version from scripts
	add_filter('script_loader_src', 'remove_wp_ver_css_js', 9999);
}

/** 
 * Remove WordPress version from RSS
 **/
function the_rss_version() { return ''; }

/** 
 * Remove WordPress version from Scripts
 **/
function remove_wp_ver_css_js( $src ) {
	if ( strpos( $src, 'ver=' ) )
		$src = remove_query_arg( 'ver', $src );
	return $src;
}

/**
 * CSS & Javascript Assets
 **/
function the_assets() {
	global $wp_styles; // call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way
	if (!is_admin()) {	
		// Main stylsheet
		wp_register_style('main', get_stylesheet_directory_uri() . '/css/main.css');
			
		// Global Scripts
		wp_register_script('vendor', get_stylesheet_directory_uri() . '/js/vendor.js', array(), '0', true);
		wp_register_script('scripts', get_stylesheet_directory_uri() . '/js/main.js',  array(), '0', true);
			
		// Enqueue Stylesheets
		wp_enqueue_style('main');
			
		// Enqueue Javascripts
		wp_enqueue_script('jquery');
		wp_enqueue_script('vendor');
		wp_enqueue_script('scripts');			
	}
}

/**
 * Theme Supports
 **/
function the_theme_supports() {
		
	// Custom Thumbnail Sizes - Defined further on in this file.
	// Enables featured images. We usually use ACF so disabled by default
		//add_theme_support('post-thumbnails');
		
		// Default 'Featured' Thumbnail Image Size
		set_post_thumbnail_size( 125, 125, true );
		
	// Post Format Options
	add_theme_support( 'post-formats',
		array(
			//'video',
			//'audio', 
		)
	);
		
	// WordPress Nav Menus
	add_theme_support('menus');		

}
	
/** 
 * Menus & Navigation
 **/
// Register WordPress Nav Menus
register_nav_menus(
	array(
		'main-menu' => __( 'Main Menu' ),
	)
);

function the_theme_main_menu() {
	$menu_settings = array(
		'theme_location'  => 'Main Menu',
		'menu'            => 'main-menu',
		'container'       => 'nav',
		'container_class' => 'menu-items'
	);
	wp_nav_menu($menu_settings);
}

/** 
 * Custom Image Sizes
 **/
	
// Sample Image Size
add_image_size( 'sample-size', 1200, 800, true );

/** 
 * Custom Post Types
 **/
// Put Taxonomies that are related to a Post Type in the same file unless taxonomy relates to multiple post types
require_once 'post-types/custom-post.php';

			
/**
 * is_blog();
 * @link https://gist.github.com/wesbos/1189639
 **/
function is_blog() {
    global $post;

    //Post type must be 'post'.
    $post_type = get_post_type($post);

    //Check all blog-related conditional tags, as well as the current post type, 
    //to determine if we're viewing a blog page.
    return (
        ( is_home() || is_archive() || is_single() )
        && ($post_type == 'post')
    ) ? true : false ;
}

/** 
 * Advanced Custom Fields Options Page
 * @link http://www.advancedcustomfields.com/resources/options-page/
 **/
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page('Options');	
}