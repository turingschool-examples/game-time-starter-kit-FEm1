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

To fire up a development server:

```shell
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```js
npm run build
```

## Run Tests in the Terminal

To run tests in Node:

```js
npm test
```
