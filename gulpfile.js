var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');

gulp.task('live-serve', function(){
    var server =  new LiveServer('server/main.js');
    server.start();
});

gulp.task('serve', ['live-serve'], function(){
    browserSync.init(null, {
        proxy: "http://localhost:7777",
        port: 9001
    })
});