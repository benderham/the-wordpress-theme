const src = "./_src";
const build = "./wordpress/wp-content/themes/the-theme";

module.exports = {
  browsersync: {
    development: {
      proxy: {
        target: "http://wordpress.localhost",
        ws: true,
      },
      port: 8080,
      files: [
        build + "/css/*.css",
        build + "/*.{php,html}",
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
    src: src + "/js/main.js",
    dest: build + "/js/",
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
    favicons: src + "/root-images/*",
    scripts: src + "/js/*",
    vendorScripts: src + "/js/vendor/*",
    templates: src + "/theme-templates/**/*.{php,html}",
  },

  favicons: {
    src: src + "/root-images/*",
    dest: build,
  },

  templates: {
    src: src + "/theme-templates/**/*.{php,css,html}",
    dest: build,
  },

  dist: build,
};
