module.exports = function(grunt) {

  let srcFiles = [
                  "app.js",
                  "pages/index.js",
                  "pages/backend/login/controller.js",
                  "pages/backend/home/controller.js",
                  "pages/backend/unit/controller.js",
                  "pages/backend/employee/controller.js",
                  "pages/backend/role/controller.js",
                  "pages/backend/food/controller.js",
                  "pages/backend/drink/controller.js",
                  "pages/backend/unitdetail/controller.js",
                  "pages/backend/position/controller.js",
                  "pages/backend/table/controller.js",
                  "pages/backend/kind/controller.js",
                  "pages/backend/promotion/controller.js",
                  "pages/backend/vendor/controller.js",
                  "pages/backend/drink_po/controller.js",
                  "pages/backend/drink_po_print/controller.js",
                  "pages/backend/drink_po_receipt/controller.js",
                  "pages/backend/account/controller.js",
                  "pages/frontend/login/controller.js",
                  "pages/frontend/home/controller.js",
                  "pages/frontend/menu/controller.js",
                  "pages/frontend/reserve/controller.js",
                  "pages/frontend/payment/controller.js",
                  "pages/frontend/cookmenu/controller.js",
                  "pages/frontend/drinkmenu/controller.js",
                  "pages/frontend/report/controller.js",
                  "pages/frontend/report_time/controller.js",
                  "pages/frontend/report_year/controller.js",
                  "pages/frontend/report_expense/controller.js",
                  "pages/frontend/all_report_print/controller.js"];

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'library/**/*.js', 'app.js', 'pages/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    concat: {
        options: {
            stripBanners: {block: true, line: true},
            banner: "'use strict';\n",
            process: function (src, filepath) {
                return '// Source: ' + filepath + '\n' + src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
            }
        },
        jsFiles: {
            src: srcFiles,
            dest: 'tmp/snapshot.js'
        }
    },
    uglify: {
          // Obfuscate approach using this command, we are currently change to Native approach
          snapshot: {
              options: {
                  ASCIIOnly: true,
                  /*wrap: 'ugwr',*/ // If wrap it will brake the Angular Translate
                  mangle: true,
                  compress: {
                      sequences: true,
                      conditionals: true,
                      comparisons: true,
                      loops: true,
                      cascade: true,
                      if_return: true,
                      join_vars: true,
                      drop_console: true,
                      drop_debugger: true,
                      keep_fnames: true,
                      unsafe: false
                  }
              },
              files: {
                  'tmp/snapshot.js': ['tmp/snapshot.js']
              }
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('secureAll', 'runs secure tasks', function () {
      var tasks = ['concat:jsFiles', 'uglify:snapshot'];

      // Use the force option for all tasks declared in the previous line
      grunt.option('force', true);
      grunt.task.run(tasks);
  });

  grunt.registerTask('default', ['concat:jsFiles']); //, 'uglify:snapshot'

};