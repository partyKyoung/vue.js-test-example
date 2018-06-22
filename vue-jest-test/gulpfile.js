var gulp = require("gulp");
var gutil = require("gulp-util");
var vueify = require("gulp-vuetilize"); // Transforms .vue files into .vue.js files.

//var jest = require("gulp-jest").default;

const PATH = "src/**/*.vue";

gulp.task("hello", () => {
  return console.log("Hello World!");
});

gulp.task("vuetilize", function() {
  return gulp
    .src(PATH)
    .pipe(vueify())
    .pipe(gulp.dest("./dist"));
});

gulp.task("watch", () => {
  let watcher = {
    vue: gulp.watch(PATH, ["vuetilize"])
  };

  let notify = event => {
    gutil.log(
      "File",
      gutil.colors.yellow(event.path),
      "was",
      gutil.colors.magenta(event.type)
    );
  };

  for (let key in watcher) {
    watcher[key].on("change", notify);
  }
});

/**
 * npm install --save-dev gulp-jest jest-cli
 */
// 이슈 있어서 주석처리 ㅠ...
// gulp.task("jest", function() {
//   return gulp.src("src/**/*.spec.js").pipe(
//     jest({
//       preprocessorIgnorePatterns: [
//         "<rootDir>/dist/",
//         "<rootDir>/node_modules/"
//       ],
//       automock: false
//     })
//   );
// });

gulp.task("default", ["hello", "vuetilize", "watch"]);
