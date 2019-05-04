
<?php
// Register Custom Post Type
function custom_post() {

	$labels = array(
		'name'                => _x( 'Post Type', 'Post Type General Name', 'the_theme' ),
		'singular_name'       => _x( 'Post Type', 'Post Type Singular Name', 'the_theme' ),
		'menu_name'           => __( 'Post Type', 'the_theme' ),
		'parent_item_colon'   => __( 'Parent Post Type:', 'the_theme' ),
		'all_items'           => __( 'All Post Type', 'the_theme' ),
		'view_item'           => __( 'View Post Type', 'the_theme' ),
		'add_new_item'        => __( 'Add New Post Type', 'the_theme' ),
		'add_new'             => __( 'Add New', 'the_theme' ),
		'edit_item'           => __( 'Edit Post Type', 'the_theme' ),
		'update_item'         => __( 'Update Post Type', 'the_theme' ),
		'search_items'        => __( 'Search Post Type', 'the_theme' ),
		'not_found'           => __( 'Not found', 'the_theme' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'the_theme' ),
	);
	$rewrite = array(
		'slug'                => 'post-type',
		'with_front'          => true,
		'pages'               => true,
		'feeds'               => true,
	);
	$args = array(
		'label'               => __( 'case_study', 'the_theme' ),
		'description'         => __( 'Custom Post Description', 'the_theme' ),
		'labels'              => $labels,
		'supports'            => array( 'title', 'revisions', ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'						=> 'dashicons-lightbulb',
		'can_export'          => true,
		'has_archive'         => false,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'rewrite'             => $rewrite,
		'capability_type'     => 'page',
	);
	register_post_type( 'custom_post_type', $args );

}

// Hook into the 'init' action
add_action( 'init', 'custom_post', 0 );