# Elixirify
Immediately power your new project by Laravel Elixir.

### Prerequisites

- You need to have `npm` installed.

### Steps

**1.** Clone the repo and change directory:
```sh
$ git clone https://github.com/zOxta/elixirify.git && cd elixirify
```
**2.** Pull the latest Laravel Elixir dependency:
```sh
$ curl -O https://raw.githubusercontent.com/laravel/laravel/master/package.json
```
**3.** Install node modules: 
```sh
$ npm install
```
**4.** (_optional_) Install the packages required by `app.js`:
```sh
$ npm install vue vue-resource lodash isjs moment
```
**Note**: if you are not going to use the app started in `app.js` then you can skip step 4, then clear `app.js`. Otherwise, you will get errors when running gulp.

**5.** If you do not have `gulp` globally installed, you can install it by:
```sh
$ npm install --global gulp
```

**6.** Finally, run gulp or gulp watch:
```sh
$ gulp
```

or

```sh
$ gulp watch
```

### TODO
- Add HTML starter demo that uses the Vue app
