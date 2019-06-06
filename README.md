# Human Resources

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

`$npm run build`


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



##Development

Install
`npm install`

To start webpack server with live reload capabilities

`./node_modules/.bin/ng serve --proxy-config proxy.conf.json --host 0.0.0.0 --port 4200`
`./node_modules/.bin/ng serve --proxy-config proxy.conf.spring.json  --host 0.0.0.0 --port 4200`


## Deployment on Tomcat as a static webapp

```
https://stackoverflow.com/questions/39468479/angular-html5mode-in-tomcat-apache-8-5-4-gives-404-on-page-refresh
```

1)
add in /opt/tomcat/conf/context.xml

 <!-- REWRITE VALVE -->
 <Valve className="org.apache.catalina.valves.rewrite.RewriteValve" />
 <!-- // -->  
add rewite.config file in specific project WEB-INF folder with below content such as on /opt/tomcat/webapps/projectName/WEB-INF/rewrite.config

2)
RewriteCond %{REQUEST_URI} !^.*\.(bmp|css|gif|htc|html?|ico|jpe?g|js|pdf|png|swf|txt|xml|svg|eot|woff|woff2|ttf|map)$
RewriteRule ^(.*)$ /index.html [L]
