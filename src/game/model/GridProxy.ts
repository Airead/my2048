module game.model {
    export class GridProxy extends puremvc.Proxy implements puremvc.IProxy {
        public static NAME:string = "GridProxy";

        // reset grid
        public static RESET_TILE:string = "reset_tile";
        public static MOVE_TILE:string = "move_tile";
        public static INSERT_TILE:string = "insert_tile";
        public static REMOVE_TITLE:string = "remove_tile";

        // merge
        public static MERGED_TILE:string = "merged_tile";

        private cells:Array<any> = [];
        private startTiles:number = 2;
        private playerTurn:boolean = true;
        private size:number = game.CommonData.size;

        public constructor() {
            super(GridProxy.NAME);
        }

        public reset():void {
            console.log("GridProxy reset()");
            this.cells = [];
            for (var x:number = 0; x < this.size; x++) {
                var row:Array<any> = [];
                this.cells.push(row);
                for (var y:number = 0; y < this.size; y++) {
                    row.push(null);
                }
            }
            this.playerTurn = true;
            this.sendNotification(GridProxy.RESET_TILE);
        }
    }
}