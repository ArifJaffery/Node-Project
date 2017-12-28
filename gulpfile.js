const gulp=require('gulp');
const ts=require('gulp-typescript');
const tsProject=ts.createProject('tsconfig.json');
const minify=require('gulp-uglify');
const nodemon=require('gulp-nodemon');

gulp.task('default',['watch'],()=>{
    console.log('Node.js Project Running');
    const stream=nodemon({
        script: 'dist/main.js'
    }).on('restart',()=>{
        console.log('Node.js Server restarted');
    });
});

gulp.task('compile',()=>{
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist/origin"));
});

gulp.task('minify',()=>{
    return gulp.src('dist/origin/*.js').pipe(minify()).pipe(gulp.dest('dist'));
});

gulp.task('watch',()=>{
    gulp.watch('src/*.ts',['compile']);
    gulp.watch('dist/origin/*.js',['minify']);
});