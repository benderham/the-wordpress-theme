<?php get_header(); ?>

	<?php if (have_posts()) : ?>
		<?php while (have_posts()) : the_post(); ?>
	
			<?php the_title(); ?>		
			<?php the_content(); ?>
	
		<?php endwhile; ?>
	<?php else : ?>		
		<!-- no content found -->
	<?php endif; ?>

<?php get_footer(); ?>