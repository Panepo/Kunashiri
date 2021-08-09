# [Kunashiri](https://panepo.github.io/Kunashiri/)

[![Build Status][travis-image]][travis-url] [![Style Status][prettier-image]][prettier-url] [![Coverage Status][codecov-image]][codecov-url]

[travis-image]: https://travis-ci.org/Panepo/Kunashiri.svg
[travis-url]: https://travis-ci.org/Panepo/Kunashiri.svg?branch=master

[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier

[codecov-image]: https://codecov.io/gh/Panepo/Kunashiri/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/Panepo/Kunashiri

An implementation of WebAssembly with React.

## FAQ

### To be updated


## Requirements

* [Wasm supported browser](https://webassembly.org/roadmap/)

## Reference

* [WebAssembly.org](https://webassembly.org/)
* [Koala 42](https://koala42.com/)
* [Neutrino's Blog](https://tigercosmos.xyz/)
* [Wasm to Wat](https://webassembly.github.io/wabt/demo/wasm2wat/)

# Develop

### Development Requirements
* node `^12.14.1`
* yarn `^1.22.4`
* rust `^1.54.0`
* wasm-pack `^0.10.0`
* Emscripten SDK `^1.38.20`
* python `^3.6.0`

### Getting Start

1. Clone source code
```
$ git clone https://github.com/Panepo/Kunashiri.git
```
2. Install dependencies
```
$ cd Kunashiri
$ yarn
```
3. Start development server and visit [http://localhost:3000/](http://localhost:3000/)
```
$ yarn start
```
### Scripts

|`yarn <script>`       |Description|
|-------------------|-----------|
|`start`            |Serves your app at `localhost:3000`|
|`electron-start`   |Run your app with electron|
|`test`             |Run test code in ./src|
|`prettier`         |Prettier code in ./src|
|`build`            |Builds the production application to ./build|
|`deploy`           |Deploy the production application to github pages|

### Production

Build code before deployment by running `yarn build`.

## Author

[Panepo](https://github.com/Panepo)
