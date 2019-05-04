<?php if (is_blog() ): ?>
  
  <?php if (is_category()) { ?>   
          <h1><?php single_cat_title(); ?></h1>
          
  <?php } elseif (is_tag()) { ?>
          <h1><?php single_tag_title(); ?></h1>
          
  <?php } elseif (is_day()) { ?>
          <h1><?php the_time('l, F j, Y'); ?></h1>
  
  <?php } elseif (is_month()) { ?>        
          <h1><?php the_time('F Y'); ?></h1>
          
  <?php } elseif (is_year()) { ?>
          <h1><?php the_time('Y'); ?></h1>
          
  <?php } else { ?>
          <h1><?php echo get_the_title( get_option( 'page_for_posts' ) ); ?></h1>
<?php } ?>
          
<?php elseif ( is_post_type_archive() ) : ?><h1><?php post_type_archive_title(); ?></h1>

<?php elseif ( is_tax() ) : {
		    global $wp_query;
		    $term = $wp_query->get_queried_object();
		    $title = $term->name;
			} ?>
			
			<h1><?php echo $title; ?></h1>
			
<?php elseif (is_404() ): ?><h1>Page Not Found</h1>

<?php elseif (is_search() ): ?><h1>Search Results</h1>

<?php elseif (is_author()): ?>
  
  <?php
    global $post;
    $author_id=$post->post_author;
  ?>
  <h1>Posts by <?php  $field='display_name';
                      echo the_author_meta( $field, $author_id ); 
                      ?>
  </h1>

<?php else: ?><h1><?php the_title(); ?></h1>  

<?php endif ?>