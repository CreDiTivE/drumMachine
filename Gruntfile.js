module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    meta: {
        basePath: './',
        srcPath: './public/sass/',
        deployPath: './public/assets/css/',
        bowerPath: './public/assets/bower_components/'
    },

    connect: {
      server: {
        options: {
          port: 8080,
          base: './public'
        }
      }
    },

    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        autoWatch: false,
        background: true
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed',
          loadPath: ['<%= meta.bowerPath %>foundation/scss/', '<%= meta.bowerPath %>foundation/scss/foundation/components/']
        },
        files: {
            '<%= meta.deployPath %>main.css': '<%= meta.srcPath %>main.scss'
        }
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'public/assets/js/JVS.min.js': ['public/assets/bower_components/angular-route/angular-route.min.js', 'public/assets/bower_components/howler/howler.min.js', 'public/app/**/*.js']
        }
      }
    },

    watch: {
      sasstocss: {
        files: ['<%= meta.srcPath %>/**/*.scss'],
        tasks: ['sass']
      },

      js: {
        files: ['public/app/**/*.js'],
        tasks: ['uglify']
      },

      karma: {
        files: ['public/app/**/*.js', 'test/**/*.js'],
        tasks: ['karma:unit:run']
      }
    }

  });

  // Tasks.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  // Default task.
  grunt.registerTask('default', ['sass', 'uglify', 'connect', 'watch']);
  //grunt.registerTask('test', ['sass', 'uglify', 'connect', 'watch']);
  grunt.registerTask('test', ['sass', 'uglify', 'karma:unit:start', 'connect', 'watch']);
};
