# DTR: Define the Relationship

### Guiding Questions to Define The Relationship:

* What are your learning goals for this project? What drives us in this project?
kk - Really want to understand OOP and how to navigate classes and how inheritance works. Also, gain a solid foundation in writing my own tests. 
* What is your collaboration style? How do you feel about pair programming vs. divide-and-conquer approaches?
kk - I prefer to pair and talk through issues but understand that doesn't always work so am completely flexible when it comes to dividing elements of the code up and working on my own. 
* How do you communicate best? How do you appreciate receiving communication from others?
kk- open and honest. Hold one and other accountable. 
* How would you describe your work style?
kk - Prefer to talk things out and work through issues by referencing docs. Also, goal of mine this mod is to be finished 2-days in advanced. Not a fan of that feeling of panic...
* What are your strengths? How can our strengths complement each other?
kk- strengths are my ability to ask for help when need be but also to work through problems on my own. I also am willing to die in this basement... so, I'm willing to put in the work. 
* What’s gone well or poorly in your previous projects?
kk- I made the mistake of not ironing out a solid DTR at the beginning and it lead to me feeling overwhelmed because it felt like the workload was uneven. Learned from that and now I don't leave without a solid DTR and setting expectations for how we want to work through the project. 
* How will we set direction and make decisions as a team?
kk - collaboration and open communication. 
* How will we overcome obstacles?
kk - open communication and collaboration. If there is an issue, we are both prepared to hold one and other accountable. 
* What do you need (resources, environment, communication) to do your best work?
kk - Just commitment and time to work through this beast.
* What scheduling restraints do you have? What are your scheduling preferences?
kk - none. Gonna put in a lot of time on this and we're both prepared for that. 
* What is your style for giving feedback? Does anything ever hold you back from giving feedback?
kk - Honest and open. 
* What do you identify as being your biggest strength(s) technically, as they relate to this project? Where do you feel you could use improvement in your technical skills, as they relate to this project? How can our team help support you in improving these skills?
kk - I think I've been doing quite well in talking through problems outloud and being able manage my time effectively. 
* What tools do you want to use to manage the project?
kk - I'd like to use Waffle.io to manage this project. This way, we can stay organized, avoid merge conflicts, and get better at process!
* How do you want the group to solve problems when members run into issues with features of the project?
kk - Open communication. Utilize Slack, Waffle.io, etc. 
* How do you know if a project is successful? How can we achieve that as a group?
kk - if we both leave this project feeling solid on classes, inheritance, writing tests, organizing our code. 
* How will we recognize each other's successes and celebrate them?
kk - high fives and celebratory adult beverages. 

Any additional questions that you would like to add:






### Template for DTR Memo

Project: 

Group Member Names: Kevin Krom & Gavin Love

Project Expectations: What does each group member hope to get out of this project? 

A foundation in OOP, inheritance, writing tests and organzing code. Canvas will be a nice thing to know but don't waste all our time on that. 

Goals and expectations:
kk - to feel comfortable when it comes to creating classes and jumping into OOP.
  
Team strengths: Open communication and both super committed. 

How to overcome obstacles: Talking through the obstacles ahead of time and working together on the project. 

Schedule Expectations (When are we available to work together and individually?):
kk - All. The. Damn. Time. 

Communication Expectations (How and often will we communicate? How do we keep lines of communication open?):
kk - see above.

Abilities Expectations (Technical strengths and areas for desired improvement):
kk- classes and inheritance. Writing clean code. speaking to every part of it. 

Workload Expectations (What features do we each want to work on?):
We can do some of the canvas separate but ideally, work on the classes, unit testing, and OOP together.

Workflow Expectations (Git workflow/Tools/Code Review/Reviewing Pull Requests): 
kk- NO MOAR MERGE CONFLICTS. Use tools like Waffle.io to stay organized and keep each other informed about what we are working on. 

Expectations for giving and receiving feedback:
kk - open and honest feedback.

Agenda to discuss project launch: Already laid the foundation. Planned times to meet, etc. 

Ideas:
 
Tools: 

Additional Notes:
Questions for evaluator:

- [ ] What might be a better way to approach this program/game?
- [ ] How do we separate our functions  from context?
- [ ] What is the best approach for mocking tests when you need to?


Things we would do given the time:

- [ ] Uncouple context so we can test collisions 
- [ ] Keep track of scrore
- [ ] Track lives
- [ ] Add levels 
- [ ] Add style to canvas
- [ ] Add a spider
- [ ] More robust testing
- [ ] Add c.fillStyle() color property to our constructor



# Game Time Starter Kit (FE - Module 2)

Basic Game Time starter kit.

## Initial Setup

One person from your project will sets up the repository. That one person should follow these steps:

1. Clone this starter kit repository and rename the repository to `game-time` in one command

  ```shell
  git clone git@github.com:turingschool-examples/game-time-starter-kit-FEm1.git game-time
  ```

  safsa

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
