# FE Build
This project is being implemented to support most major browsers thanks to Babel and uses webpack for the build purposes which incorporates both CSS and JS linters for best code style and code practices. 


## Scripts
#### Development build
```
npm run start
```
> Will start up `webpack-dev-server` that provides a simple web server with enabled live reloading.


#### Production build
```
npm run build
```
> Will lint the source code and further compile it. In addition code will be analysed and split in meaningful chunks so that initial load happens faster.

 
### Technologies used:
- Webpack with plugins for code optimisation
-  JavaScript ES6 support to the major  browsers 
- StyleLint and ESLint
