module game.controller {
    export class GameCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
        public static NAME:string = "GameCommand";

        public constructor() {
            super();
        }

        public static GAME_RESET:string = "game_reset";
        public static USER_MOVED:string = "user_moved";
        public static USER_MOVE:string = "user_move";

        public register():void {
            this.facade.registerCommand(GameCommand.GAME_RESET, GameCommand);
            this.facade.registerCommand(GameCommand.USER_MOVED, GameCommand);
            this.facade.registerCommand(GameCommand.USER_MOVE, GameCommand);
        }

        public execute(note:puremvc.INotification):void {
            console.log("GameCommand run ", note.getName());
            var gameProxy:game.model.GameProxy = <game.model.GameProxy>this.facade.retrieveProxy(game.model.GameProxy.NAME);
            var gridProxy:game.model.GridProxy = <game.model.GridProxy>this.facade.retrieveProxy(game.model.GridProxy.NAME);
            var data:any = note.getBody();
            switch (note.getName()) {
                case GameCommand.GAME_RESET:
                {
                    gameProxy.reset();
                    gridProxy.reset();
                    gridProxy.addStartTiles();
                    break;
                }
                case GameCommand.USER_MOVE:
                {
                    gridProxy.move(<number>data);
                    break;
                }
                case GameCommand.USER_MOVED:
                {
                    gameProxy.updateScore(data.score);
                    if (!data.won) {
                        if (data.moved) {
                            gridProxy.computerMove();
                        }
                    } else {
                        gameProxy.setResult(true);
                    }

                    if (!gridProxy.movesAvailable()) {
                        gameProxy.setResult(false);
                    }
                    break;
                }
            }
        }
    }
}