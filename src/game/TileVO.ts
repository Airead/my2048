module game {
    export class TileVO {
        public x:number;
        public y:number;
        public value:number;
        public merged:boolean;
        public previousPosition:any;

        public constructor(){}

        public clone():TileVO {
            var tileVO:TileVO = new TileVO();
            tileVO.x = this.x;
            tileVO.y = this.y;
            tileVO.value = this.value;

            if (this.previousPosition) {
                tileVO.previousPosition = {x: this.previousPosition.x, y: this.previousPosition.y};
            }
            tileVO.merged = this.merged;
            return tileVO;
        }
    }
}