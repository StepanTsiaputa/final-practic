var gulp = require("gulp");
    less = require("gulp-less"),
    nano = require("gulp-cssnano"),
    browserSync = require("browser-sync").create(),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    addSrc = require("gulp-add-src"),
    rjo = require("gulp-requirejs-optimize");

gulp.task("html", function(){
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});
gulp.task("css", function(){
    return gulp.src("src/style/style.less")
    .pipe(less())
    .pipe(nano())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});
gulp.task("img", function(){
    return gulp.src("src/img/**/*.{jpg,png}")
    .pipe(gulp.dest("dist/img"));
});
gulp.task("fonts", function(){
    return gulp.src([
        "src/bower_comp/bootstrap/dist/fonts/*.*",
        "src/bower_comp/font-awesome/fonts/*.*",
        "src/fonts/**/*.*"
    ])
    .pipe(gulp.dest("dist/fonts"));
});
gulp.task("json", function(){
    return gulp.src("src/data/*.json")
        .pipe(gulp.dest("dist/js"));
});
gulp.task("vendor-css", function(){
    return gulp.src([
        "src/bower_comp/bootstrap/dist/css/bootstrap.css",
        "src/bower_comp/font-awesome/css/font-awesome.css",
        "src/bower_comp/datatables.net-dt/css/jquery.dataTables.css",
        "src/bower_comp/datatables.net-bs/css/dataTables.bootstrap.css",
        "node_modules/toastr/build/toastr.css"
    ])
    .pipe(nano())
    .pipe(concat("vendor.min.css"))
    .pipe(gulp.dest("dist/css"));
});
gulp.task("js-vendor", function(){
    return gulp.src([
        "src/bower_comp/bootstrap/dist/js/bootstrap.js",
        "src/bower_comp/datatables.net/js/jquery.dataTables.js",
        "src/bower_compdatatables.net-bs/js/dataTables.bootstrap.js",
        "src/js/main.js",
        "node_modules/toastr/build/toastr.min.js"
    ])
    .pipe(addSrc.prepend("src/bower_comp/jquery/dist/jquery.js"))
    .pipe(concat("vendor.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
});
//gulp.task("js", function(){
//    return gulp.src("src/data/main.js")
//    .pipe(uglify())
//    .pipe(gulp.dest("dist/js"));
//});
gulp.task("watch", function(){
    browserSync.init({
        server: "dist"
    });
    gulp.watch("src/style/**/*.less", ["css"]);
    gulp.watch("src/**/*.html", ["html"]);
    gulp.watch("src/data/*.js", ["js-vendor"]);
    gulp.watch("dist/**/*.html").on("change", browserSync.reload);
});
gulp.task("default", ["html", "img", "fonts", "vendor-css", "css", "js-vendor", "json", "watch"]);