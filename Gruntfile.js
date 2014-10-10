/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    watch: {
      scsslint: {
        files: 'scss/**/*.scss',
        tasks: ['scsslint']
      },
      css: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },
    sass: {
      dist: {
        files: {
            'style.css' : 'scss/style.scss'
        }
      }
    },
    scsslint: {
      allFiles: [
        'scss/**/*.scss'
      ],
      options: {
        config: 'scss/.scss-lint.yml'
      }
    },
    browserSync: {
      bsFiles: {
        src : 'style.css'
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./"
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task.
  grunt.registerTask('default', ['sass', 'scsslint', 'browserSync', 'watch']);
};