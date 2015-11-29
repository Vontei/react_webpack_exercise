## ReactJs and Webpack Exercise

```
 Following tutorials for Webpack / ES6 / and React integration.


 * Simple message queue.
 * New ES6 Class Based OOP and imports and Babel
 * Webpack and Webpack Server
 * Express/Node
 * MomentJs
```




## Getting Started with ReactJs, Webpack, Babel, Es6, and Jest


1.) Get your ducks in a row.  After creating either an express app or a simple file structure, you need to make sure you have HomeBrew and NPM installed. You should have your typical client side set-up, i.e. a public/js/main.js(jsx) and a public/index.html to start.

Do the following... or else?...

ReactJs and WebPack:
```
npm install webpack webpack-dev-server --save-dev
npm install -g webpack webpack-dev-server
npm install react react-dom --save

```

In order for Webpack to handle JSX files you need the "loader" ... the second allows you to funnel your css as well.
```
$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 --save-dev
$ npm install style-loader css-loader --save-dev
```


In order to run your webpack app from the CL:
```
 webpack-dev-server --content-base app/
```
app is whatever the root path is for your React app, like Public in an express file structure.


Jest:
```
npm install --save-dev babel-jest
npm install --save-dev jest-webpack-alias
```



In the root of your project you need a webpack.config.js file. It's similar to your package.json and is required to properly pipe and config the build-pack (which is essentially what Webpack is).


Here is the standard...Credits to the world wide web for a quick config.  Copy pasta this portion if you are with me up until now. You may have to check that your path names are correct for your particular project.

```
module.exports = {
  entry: {
    app: ['./app/main']
  },
  output: {
    path: './app',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  }
};
```


## But... WHY?!

Webpack is going to take everything from app/main or public/main.js(jsx) and compile it into one file, bundle.js. So you have one bundle.js script that is included in the head of your index.html.

After running your build command, you can go to
```
http://localhost:8080/webpack-dev-server/index.html
```
and you will see your app with a Webpack Default header that displays build-status, errors, and processing/build details.  This is helpful in development, but if you would rather not see it, you should be able to visit
```
http://localhost:8080/
```
for your typical view.



## Test the React

In main.jsx

```
var React = require('react');
var ReactDOM = require('react-dom');

var HaiBai = React.createClass({
  render: function () {
    return <div>Oh Hai, Hey Bai</div>;
  }
});

ReactDOM.render(<HaiBai />, document.querySelector('#react-mount'));
```

In index.html
```
<div id="react-mount"></div>
<script src="../bundle.js"></script>
```

Run It!

## Cool, but...

We are writing ES6, you know the good stuff.  So we have access to import statements and simple class declarations similar to Java or C#.  It may seem strange now, but once you get the hang of it, you'll love it.

Here is the same old code, the newwww way.
```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HaiBai extends Component {
  render() {
    return <div>Oh Hai, hey Bai</div>;
  }
}

ReactDOM.render(<HaiBai />, document.querySelector('#react-mount'));
```

Take a minute to collect your blown mind and continue.  Disclaimer: if you are unfamiliar with OOP and the concepts of implementation, inheritance, and hierarchies... Do yourself a favor and put this on pause...read up on OOP, pay your dues, make the mammal say moo (no seriously though), and come back to us. 
