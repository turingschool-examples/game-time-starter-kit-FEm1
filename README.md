# Game Time Starter Kit (FE - Module 2)

Basic Game Time starter kit.

## Initial Setup

One person from your project will sets up the repository. That one person should follow these steps:

1. Clone this starter kit repository and rename the repository to `game-time` in one command

  ```shell
  git clone git@github.com:turingschool-examples/game-time-starter-kit-FEm1.git game-time
  ```

2. Change into the `game-time` directory

3. Remove the default remote (origin)

  ```shell
  git remote rm origin
  ```

4. Create a new repository on GitHub named `game-time`

5. Add your new repository remote to the game time starter kit - **your remote URL and user name will be different in the command below**

  ```shell
  git remote add origin git@github.com:robbiejaeger/game-time.git
  ```

6. Install the dependencies of the starter kit

  ```shell
  npm install
  ```

7. Add, commit, and push up to your repository

  ```shell
  git add .
  git commit -m "Initial commit using starter kit"
  git push origin master
  ```

8. Now add your team member(s) as collaborators to the repository. They can now clone down your `game-time` repository as normal.

9. Once each partner clones down the repo, they need to run `npm install` to install the dependencies on their machine.

## Run the Server

To see your code in action, you need to fire up a development server. Use the command:

```shell
npm start
```

Once the server is running, visit in your browser:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```js
npm run build
```

## Run Tests in the Terminal

To run all of your tests:

```js
npm test
```

## File Organization

Webpack is a little opinionated about how files are organized. Here is a brief guide on how to organize development and test files.

### Development Files

Node and webpack work together to help us organize our files and keep responsibilities separated.

For example, if we have the `lib/index.js` file and a `lib/Block.js` file:

**lib/index.js**

```javascript
var Block = require('./Block');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var blocks = [];

blocks.push(new Block(50, 50, 10, 10, context));
blocks.push(new Block(100, 50, 10, 10, context));

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  this.blocks.forEach(function(block){
    block.draw()
    block.move()
  })

  requestAnimationFrame(gameLoop);
});
```

**lib/Block.js**

```javascript
function Block(x, y, width, height, context) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.context = context;
}

Block.prototype.draw = function () {
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

Block.prototype.move = function () {
  this.y++;
};

module.exports = Block;
```

All of the `Block.js` code could live in the `index.js` file, but that would go against our philosophy of separating responsibility between files.

There are two main things to pay attention to here:

1. At the top of the `index.js` file, we require the `Block.js` file using the line of code `var Block = require('./Block');` (we leave out the `.js`). This brings in the code from the `Block.js` file so we can use that file's code in the `index.js` file.

2. In the `Block.js` file, the bottom line says `module.exports = Block;` which says what we want this file to export when we say `require` in other files, like in `index.js`.

So now we have two files that can share code between each other, but we have to pay attention to what we export and what we require. If we didn't do this, then when we try to make a new Block in the `index.js` file, it won't know what Block we're talking about!

### Test Files

Near the end of game time, you will have multiple objects for your game that are tested separately with individual test files. The `test/index.js` file serves as an "entry point" for mocha to load all of the tests you write.

Test file organization is a bit different from development files. If we want to test the `Block.js` file from above, then this is how we would do it. For each object file (in this case `block.js`), we want to have a corresponding test file. So in the `test` directory, we would create a new file called `test/Block-test.js`. Here is what that file would look like:

**test/Block-test.js**

```javascript
var chai = require('chai');
var assert = chai.assert;

var Block = require('../lib/Block');

describe('Block', function() {
  context('with default attributes', function() {
    // Your tests here...  
  });  
});
```

**test/index.js**

```javascript
require('./Block-test')
```

Two main points to pay attention to:

1. In the `Block-test.js` file, we require the `Block.js` file so that we can construct blocks in our tests.

2. In the `test/index.js` file, we require the `Block-test.js` file so that we can view the test results in the browser (at `http://localhost:8080/webpack-dev-server/test.html`).
