module game {
    export class MainGameUI extends egret.gui.Group {
        public resetButton:egret.gui.Button;

        public constructor() {
            super();
            this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        }

        public createCompleteEvent(event: egret.gui.UIEvent) {
            this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            //ApplicationFacade.getInstance().registerMediator(new view.MainMenuMediator(this));
        }
    }
}