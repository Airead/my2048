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

        public listNotificationInterests():string[] {
            return [
                game.model.GameProxy.UPDATE_SCORE,
                game.model.GameProxy.RESET_SCORE,
            ];
        }

        public handleNotification(notification:puremvc.INotification):void {
            var data:any = notification.getBody();
            switch(notification.getName()) {
                case game.model.GameProxy.UPDATE_SCORE: {
                    this.mainMenuUI.scoreLabel.text = data.totalScore.toString();
                    this.mainMenuUI.highScoreLabel.text = data.highScore.toString();
                    this.mainMenuUI.playScoreEffect(data.addScore);
                    break;
                }
            }
        }

        public get mainMenuUI():MainMenuUI {
            return <MainMenuUI>this.viewComponent;
        }
    }
}