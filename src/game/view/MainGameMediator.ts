module game.view {
    export class MainGameMediator extends puremvc.Mediator implements puremvc.IMediator {
        public static NAME:string = "MainGameMediator";

        public constructor(viewComponent:any) {
            super(MainGameMediator.NAME, viewComponent);
        }


        public listNotificationInterests():string[] {
            return [
                game.model.GridProxy.INSERT_TILE,
                game.model.GridProxy.MERGED_TILE,
                game.model.GridProxy.MOVE_TILE,
                game.model.GridProxy.REMOVE_TITLE,
                game.model.GridProxy.RESET_TILE,
            ];
        }


        public handleNotification(notification:puremvc.INotification):void {
            console.log("MainGameMediator handle ", notification.getName());
            var data:any = notification.getBody();
            switch (notification.getName()) {
                case game.model.GridProxy.INSERT_TILE:
                {
                    this.mainGameUI.createTile(<TileVO>data);
                    break;
                }

                case game.model.GridProxy.RESET_TILE:
                {
                    this.mainGameUI.clearTiles();
                    break;
                }

                case game.model.GridProxy.MERGED_TILE:
                {
                    this.mainGameUI.mergedTile(<TileVO>data);
                    break;
                }

                case game.model.GridProxy.MOVE_TILE:
                {
                    this.mainGameUI.moveTile(<TileVO>data);
                    break;
                }

            }
        }

        public get mainGameUI():MainGameUI {
            return <MainGameUI>this.viewComponent;
        }
    }
}