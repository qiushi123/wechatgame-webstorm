import {ResourceLoader} from "./base/ResourceLoader";
import {Director} from "./Director";
import {BackGround} from "./runtime/BackGround";

export class Main {
    constructor() {
        this.canvas = wx.createCanvas();
        this.context = this.canvas.getContext('2d');

        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));

        console.log(window.innerWidth);
        console.log(window.innerHeight);
    }

    onResourceFirstLoaded(map) {
        let background=new BackGround(this.context,map.get('background'));
        background.draw();
    };


}