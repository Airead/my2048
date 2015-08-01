/**
 * Created by airead on 15/8/1.
 */
module game {
    export class MainMenuUI extends egret.gui.SkinnableComponent {

        public constructor() {
            super();
            this.skinName = skins.simple.MainMenuUISkin;
        }
    }
}