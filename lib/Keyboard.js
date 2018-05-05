import Exterminator from './exterminator';


class Keyboard {
  constructor() {
    this.left = 37;
    this.right = 39;
    this.up = 38;
    this.down = 40;
    this.space = 32;
    this.keys = {};
  }

  keyDown(event, exterminator) {
    console.log(exterminator);
    this.keys[event.keyCode] = true;
    exterminator.move(this.left);
  }
  keyUp(event) {
    this.keys[event.keyCode] = false;
  }

  

}




export default Keyboard;