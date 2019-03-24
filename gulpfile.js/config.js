var src = "app/website-source";
var build = "app/wordpress/wp-content/themes/the-theme/";

module.exports = {
  browsersync: {
    development: {
      // server: {
      //   baseDir: [build]
      // },
      proxy: {
        target: "http://the-wordpress-theme",
        ws: true,
      },
      port: 8080,
      files: [
        build + "/css/*.css",
        build + "/*.html",
        build + "/images/**",
        build + "/js/**/*.js",
      ],
    },
  },

  scss: {
    src: src + "/scss/**/*.{sass,scss}",
    dest: build + "/css/",
  },

  scripts: {
    src: src + "/js/**/*.js",
    dest: build + "/js/",
  },

  vendorScripts: {
    src: [],
    dest: build + "/js/vendor",
  },

  autoprefixer: {
    browsers: ["last 2 versions", "Safari >= 8", "ie 8", "ie 9"],
    cascade: false,
  },

  image: {
    src: src + "/images/**/*.{jpg,png,gif,svg}",
    dest: build + "/images/",
  },

  watch: {
    sass: src + "/scss/**/*.{sass,scss}",
    images: src + "/images/**/*",
    scripts: src + "/js/**/*",
    templates: src + "/theme-templates/**/*",
  },

  favicons: {
    src: src + "/root-images/*",
    dest: build,
  },

  templates: {
    src: src + "/theme-templates/**/*.{php,css,html}",
    dest: build,
  },

};
