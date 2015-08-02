module game.model {
    export class GameProxy extends puremvc.Proxy implements puremvc.IProxy {
        public static NAME:string = "GameProxy";

        public static UPDATE_SCORE:string = "update_score";

        public static GAME_RESULT:string = "game_result";

        public static RESET_SCORE:string = "reset_score";

        private won:boolean = false;
        private over:boolean = false;


        public constructor(){
            super(GameProxy.NAME);
        }

        private _score:number = 0;
        public get socre():number {
            return this._score;
        }

        private _highScore:number = 0;


        public get highScore():number {
            return this._highScore;
        }

        public reset():void {
            this._score = 0;
            this.won = false;
            this.over = false;
            game.CommonData.isRunning = true;
            this.sendNotification(GameProxy.RESET_SCORE);
        }

        public updateScore(addScore:number):void {
            if (addScore != 0) {
                this._score += addScore;
                if (this._score > this._highScore) {
                    this._highScore = this._score;
                }
                this.sendNotification(GameProxy.UPDATE_SCORE, {totalScore:this._score, highScore:this.highScore, addScore: addScore});
            }
        }

        public setResult(b:boolean):void {
            if (b) {
                this.won = true;
            } else {
                this.over = true;
            }
            game.CommonData.isRunning = false;
            this.sendNotification(model.GameProxy.GAME_RESULT, b);
        }
    }
}