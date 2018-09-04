import {ResourceLoader} from "./base/ResourceLoader";
import {DataStore} from "./base/DataStore";
import {BackGround} from "./runtime/BackGround";
import {Director} from "./Director";

export class Main {
    constructor() {
        this.canvas = wx.createCanvas();
        this.context = this.canvas.getContext('2d');

        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));

        this.dataStore = DataStore.getInstance();

    }

    onResourceFirstLoaded(map) {
        this.dataStore.ctx = this.context;
        this.dataStore.res = map;
        this.init();
    };

    init() {
        this.dataStore.put('background', BackGround);
        console.log(typeof BackGround);
        Director.getInstance().run();
    }


}