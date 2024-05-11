let gulp = require("gulp");
let uglify = require('gulp-uglify-es').default;

gulp.task("compress", function () {
    return gulp.src(["contentscript/*.js"])
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("lib/"));
});