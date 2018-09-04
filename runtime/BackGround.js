import {Sprite} from "../base/Sprite";

export class BackGround extends Sprite {
    constructor() {
        const image = Sprite.get('background');
        super(image,
            0, 0,
            image.width, image.height,
            0, 0,
            window.innerWidth, window.innerHeight
        );

    }
}