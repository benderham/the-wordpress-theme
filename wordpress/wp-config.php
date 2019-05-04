<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_theme' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'eovi)o/,W?zt4^5D%K)(>NCu~ye+$-7s!fZNw01C`i|]g]56A;9gi&-?oxjIZAG,' );
define( 'SECURE_AUTH_KEY',  'z)pt5:>@R42?hf=9!xa|<>GgqA2j`mwJtzKyc16%QPYpA>5?a[}U6c9w)F6(UDnQ' );
define( 'LOGGED_IN_KEY',    '04b8&)L#0u<?-]wX8Px.U4JJ$q$4qoD`8kQ2%t=pFqb!ji)l~rrvei1/g1J96Z?1' );
define( 'NONCE_KEY',        '[f[6P|1=p/N^F?]*DkNpgf,4Z3/2C7w0Na&xv=#K35G@gPB-o,>c)Nv;Jf&8h%JH' );
define( 'AUTH_SALT',        'AVKW0}PoX|q8w,^<s5mm0Z! )wYZ~S<xdb3*Ra=qXeH-U;zK E`r-IJ+=UV7@*i@' );
define( 'SECURE_AUTH_SALT', 'B(g;3r@HNWB$(Bu6Fm[}fmdJ#mkx+(sI>e0BsWz^DfZ>76W+= j2&&} l1lKlv`*' );
define( 'LOGGED_IN_SALT',   '?,!:A|hvirqiRo}:}}IM!muCbn`K9itTf!]dvrW&axJ^:O^f4U=4xES*ivJ!UC~=' );
define( 'NONCE_SALT',       'N4j.cu)i3<_Tr+C/s~(fE8,V2^UO9?VcpjEi&BrzXH=/oB#UyK!VMwDS@vVc6M6r' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
