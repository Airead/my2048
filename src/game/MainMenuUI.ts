/**
 * Created by airead on 15/8/1.
 */
module game {
    export class MainMenuUI extends egret.gui.SkinnableComponent {
        public resetButton:egret.gui.Button;

        public constructor() {
            super();
            this.skinName = skins.simple.MainMenuUISkin;
            this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        }

        public createCompleteEvent(event:egret.gui.UIEvent):void {
            this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            ApplicationFacade.getInstance().registerMediator(new view.MainMenuMediator(this));
        }
    }
}