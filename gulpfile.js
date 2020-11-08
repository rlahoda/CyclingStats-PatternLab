const { src, dest, parallel, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");

function scss() {
  return (
    src("./source/css/**/*.scss")
      .pipe(sass())
      .on("error", sass.logError)
      // Use postcss with autoprefixer and compress the compiled file using cssnano
      .pipe(postcss([autoprefixer(), cssnano()]))
      // Now add/write the sourcemaps
      .pipe(sourcemaps.write())
      .pipe(dest("source/css"))
      .pipe(browserSync.stream())
  );
}

exports.css = scss;
exports.compile = function() {
  watch("source/css/**/*.scss", { ignoreInitial: false }, scss);
};
// const watch = () => watch(paths.scripts.src, gulp.series(scripts, reload));
exports.default = parallel(scss);
