/*
PACKAGE JSON LISTO PARA USAR GULP CON NPM

npm run build PARA CREAR NUESTRA CARPETA /dist

npm run document PARA CREAR NUESTRA DOCUMENTACION SASS
*/

const {series, parallel, dest, src, pipe } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const sassdoc = require('sassdoc');

const minCSS = require('gulp-clean-css');
const minHTML = require('gulp-htmlmin');

const rename = require("gulp-rename");


//GENERAR DOCUMENTACION SASS
function document(){
    return src('scss/abstract/general.scss')    //GENERAMOS LA DOCUMENTACION
    .pipe(sassdoc());
}

//CSS BUILD
function css(cb){
    return src('scss/main.scss')                //OBTENEMOS EL ARCHIVO PRINCIPAL
    .pipe(sass())                               //COMPILAMOS EL SASS EN CSS
    .pipe(minCSS({compatibility: 'ie8'}))       //MINIFICAMOS (uso cleanCSS ya que pleeease me daba errores para instalarlo)
    .pipe(rename({                              //RENOMBRAMOS EL CSS
        basename: 'styles',
        extname: '.css'
    }))
    .pipe(dest('dist/css/'));                   //MOVEMOS AL DESTINO
    cb();
}

//HTML BUILD
function html(cb){
    return src('index.html')                        //OBTENEMOS EL INDEX.HTML
    .pipe(minHTML({ collapseWhitespace: true }))    //MINIFICAMOS
    .pipe(dest('dist/'));                           //MOVEMOS AL DESTINO
    cb();
}

//IMG BUILD
function img(cb){
    return src('img/**')                        //OBTENEMOS LA CARPETA IMG Y TODOS SUS FICHEROS Y SUBCARPETAS
    .pipe(dest('dist/img/'));                   //MOVEMOS AL DESTINO
    cb();
}


exports.css = css;
exports.html = html;
exports.img = img;
exports.document = document;
exports.build = series(html, css, img);