# voting-server

My take on 'voting-server' - http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html

## Server

### Getting started

This will install all npm packages, runs linter, tests, and then on success, runs the server

    > npm start

### Testing

Runs Karma and watches for changes to re-run tests. To add a unit test, simply create a `.spec.js` file anywhere in `~/src`. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them.

    > npm test
    
## Client

### Getting started

This will install all npm packages and then run a live reload server at http://localhost:8080/index.html

    > npm start

### Testing

Runs Karma and watches for changes to re-run tests. To add a unit test, simply create a `.spec.js` file anywhere in `~/src`. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them.

    > npm test

### Production build

Runs linter, tests, and then on success, compiles your application to `~/dist`

    > npm run production