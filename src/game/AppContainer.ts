/**
 * Created by airead on 15/8/1.
 */

module game {
    export class AppContainer extends egret.gui.UIStage {
        public mainMainUI: MainMenuUI;
        public mainGameUI: MainGameUI;
        public constructor() {
            super();
            this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        }

        private  createCompleteEvent(event:egret.gui.UIEvent):void {
            this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        }


        public createChildren():void {
            super.createChildren();

            this.mainMainUI = new MainMenuUI();
            this.addElement(this.mainMainUI);

            this.mainGameUI = new MainGameUI();
            this.addElement(this.mainGameUI);
        }
    }
}