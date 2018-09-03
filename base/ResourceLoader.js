import {Resources} from "./Resources";//引入图片数组

//确保图片资源加载完成后再进行canvas渲染
export class ResourceLoader {
    map = null;

    constructor() {
        this.map = new Map(Resources);
        for (let [key,value] of this.map) {
            const image=wx.createImage();
            image.src=value;
            this.map.set(key,image);
        }
    }

    //加载完成
    onLoaded(callback){
        let loadCount=0;
        for (let value of this.map.values()) {
            value.onload=()=>{
                loadCount++;
                if (loadCount>=this.map.size) {
                    callback(this.map);
                }
            }
        }
    }
    static create(){
        return new ResourceLoader();
    }
}