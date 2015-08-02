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
            ApplicationFacade.getInstance().registerMediator(new view.ApplicationMediator(this));

            ApplicationFacade.getInstance().sendNotification(controller.GameCommand.GAME_RESET);
        }

        public createChildren():void {
            super.createChildren();

            this.mainMainUI = new MainMenuUI();
            this.mainMainUI.top = 10;
            this.mainMainUI.horizontalCenter = 0;
            this.addElement(this.mainMainUI);

            this.mainGameUI = new MainGameUI();
            this.mainGameUI.top = 140;
            this.mainGameUI.horizontalCenter = 0;
            this.addElement(this.mainGameUI);
        }
    }
}