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

        public addStartTiles():void {
            for (var i:number = 0; i < this.startTiles; i++) {
                this.addRandomTile();
            }
        }

        private withinBounds(x:number, y:number):boolean {
            return x >= 0 && x < this.size && y >= 0 && y < this.size;
        }

        private cellContent(x:number, y:number):TileVO {
            if (this.withinBounds(x, y)) {
                return <TileVO>this.cells[x][y];
            } else {
                return null;
            }
        }

        private get availableCells():Array<any> {
            var arr:Array<any> = [];
            for (var x:number = 0; x < this.size; x++) {
                for (var y:number = 0; y < this.size; y++) {
                    if (!this.cells[x][y]) {
                        arr.push({x: x, y: y});
                    }
                }
            }

            return arr;
        }

        private cellsAvailable():boolean {
            if (this.availableCells.length > 0) {
                return true;
            }
            return false;
        }

        private isAvailable(x:number, y:number):boolean {
            return !this.isOccupied(x, y);
        }

        private isOccupied(x:number, y:number):boolean {
            if (this.cellContent(x, y)) {
                return true;
            } else {
                return false;
            }
        }

        private get randomAvailableCell():any {
            var arr:Array<any> = this.availableCells;
            if (arr.length) {
                return arr[Math.floor((Math.random() * arr.length))];
            }
            return null;
        }

        private insertTile(tile:TileVO):void {
            this.cells[tile.x][tile.y] = tile;
            this.sendNotification(GridProxy.INSERT_TILE, tile.clone());
        }

        private addRandomTile():void {
            if (this.cellsAvailable()) {
                var position:any = this.randomAvailableCell;
                var tile:TileVO = new TileVO();
                tile.x = position.x;
                tile.y = position.y;
                tile.value = Math.random() < 0.9 ? 2 : 4;
                this.insertTile(tile);
            }
        }
    }
}