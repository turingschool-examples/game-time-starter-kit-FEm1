# Game Time Starter Kit (FE - Module 1)

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

Webpack is somewhat opinionated about how files are organized. Here is a brief guide on how to organize development and test files.

### Development Files

Node and webpack work together to help us organize our files and keep responsibilities separated.

More on this coming soon...

### Test Files

Near the end of game time, you will have multiple objects for your game that are tested separately with individual test files. The `/test/index.js` file serves as an "entry point" for mocha to load all of the tests you write.

More on this coming soon...
