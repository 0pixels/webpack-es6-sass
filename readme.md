# Webpack 4: ES6 + Sass Template

This Webpack configuration compiles/transpiles ES6 Javascript to ES5, while also compiling Sass to CSS.

## Getting started

1. Clone this repo: `git clone https://github.com/0pixels/es6-sass-template.git`
2. Run `cd es6-sass-template/`
3. Run `npm install`
4. Test that everything is working with `npm run start`:
    * This will start a Webpack development server at `localhost:8080` unless that port is already being used.
    * Navigate to `localhost:8080` or `127.0.0.1:8080`.
	* If you see multiple folders, click on the `src` folder.
	* You should then see **"It's working!"** displayed on the page.

## Usage

* `npm run start`  
    * Starts a Webpack development server using the development configuration file. This does not minify any files and creates source maps for all processed CSS files.

* `npm run build`  
    * Transpiles ES6 *(from /src/js/main.js)* to `/dist/main.js` and Sass *(from /src/scss/main.scss or main.sass)* to `/dist/main.css`.
