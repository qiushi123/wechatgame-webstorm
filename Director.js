export class Director {

    constructor(){
        console.log("构造函数执行")
    }
    static getInstance(){
        if (!Director.instance){
            Director.instance=new Director();
        }
        return Director.instance;
    }
}