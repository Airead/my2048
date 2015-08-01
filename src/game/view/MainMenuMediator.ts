module game.view {
    export class MainMenuMediator extends puremvc.Mediator implements puremvc.IMediator {
        public static NAME:string = "MainMenuMediator";

        public constructor(viewComponent:any) {
            super(MainMenuMediator.NAME, viewComponent);
            this.mainMenuUI.resetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startButtonClick, this);
        }

        public startButtonClick(event:egret.TouchEvent):void {
            console.log('resetButton touchTap');
            this.sendNotification(game.controller.GameCommand.GAME_RESET);
        }

        public get mainMenuUI():MainMenuUI {
            return <MainMenuUI>this.viewComponent;
        }
    }
}