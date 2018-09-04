import {DataStore} from "./base/DataStore";

export class Director {

    constructor(){
        this.dataStore=DataStore.getInstance();
    }
    static getInstance(){
        if (!Director.instance){
            Director.instance=new Director();
        }
        return Director.instance;
    }

    run(){
      const backgroundSprite=this.dataStore.get('background');
        backgroundSprite.draw();
    }
}