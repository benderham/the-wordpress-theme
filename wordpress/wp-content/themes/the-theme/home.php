<?php
/**
 * The home.php corresponds to the "posts"/blog page (when setting static front page in Settings > Reading 
 */
?>
<?php get_header(); ?>

	<?php if (have_posts()) : ?>
		<?php while (have_posts()) : the_post(); ?>
	
			<?php the_title(); ?>
			<?php the_time('F j, Y'); ?>
			<?php the_excerpt(); ?>
	
		<?php endwhile; ?>
	<?php else : ?>		
		<!-- no content found -->
	<?php endif; ?>

<?php get_footer(); ?>