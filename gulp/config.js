var src = 'app/website-source';
var build = 'app/wordpress/wp-content/themes/the-theme/';

module.exports = {

  browsersync: {
    development: {
      server: {
        baseDir: [build]
      },
      port: 8080,
      files: [
        build + '/css/*.css',
        build + '/*.html',
        build + '/images/**',
        build + '/js/**/*.js'
      ]
    }
  },

  scss: {
    src:  src + '/scss/**/*.{sass,scss}',
    dest: build + '/css/'
  },

  scripts: {
    src:  src + '/js/**/*.js',
    dest: build + '/js/'
  },

  pug: {
    src:  src + '/pug/**/*.pug',
    dest: build
  },

  autoprefixer: {
    browsers: [
      'last 2 versions',
      'Safari >= 8',
      'ie 8',
      'ie 9'
    ],
    cascade: false
  },

  modernizr: {
    src:  [
      src + '/js/**/*.js',
      src + '/scss/**/*.scss'
    ],
    dest: build + '/js/',
    options: [
      'setClasses',
      'addTest',
      'html5printshiv',
      'testProp',
      'fnBind'
    ],
    tests: [
      'flexbox'
    ]
  },

  image: {
    src: src + '/images/**/*.{jpg,png,gif,svg}',
    dest: build + '/images/'
  },

  svg: {
    src: src + '/svg/*.svg',
    dest: src + '/svg',
    mode: {
      symbol: {
        dest: '.',
        sprite: 'svg-sprite.svg'
      }
    }
  },

  watch: {
    sass: src + '/scss/**/*.{sass,scss}',
    images:  src + '/images/**/*',
    scripts: src + '/js/**/*',
    templates: src + '/theme-templates/**/*'
  },

  favicons: {
    src:  src + '/root-images/*',
    dest: build
  },

  templates: {
    src:  src + '/theme-templates/**/*.{php,css,html}',
    dest: build
  },

  optimize: {
    css: {
      src:  build + '/css/*.css',
      dest: build + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },

    js: {
      src:  build + '/js/*.js',
      dest: build + '/js/',
      options: {}
    }
  }

}
