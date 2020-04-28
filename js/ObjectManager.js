class ObjectManager {
    constructor() {
        this.objectArray=[];
    }
    addObject(obj) {
        this.objectArray.push(obj);
    }
    removeObject() {

    }
    event() {
        for(var i=0;i<this.objectArray.length;i++) {
            this.objectArray[i].event();
        }
    }
    move() {
        for(var i=0;i<this.objectArray.length;i++) {
            this.objectArray[i].move();
        }
    }
}