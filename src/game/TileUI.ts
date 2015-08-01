/**
 * Created by airead on 15/8/1.
 */
module game {
    export class TileUI extends egret.gui.UIAsset {
        public constructor() {
            super();

            this.anchorX = this.anchorY = 0.5;
            this.location = {x: 0, y: 0};
        }

        public location:any;
        private valueChanged:boolean;
        private _value:number;

        public get value():number {
            return this._value;
        }

        public set value(value:number) {
            if (value == this._value) {
                return;
            }
            this.valueChanged = true;
            this._value = value;
            this.invalidateProperties();
        }

        public commitProperties():void {
            if (this.valueChanged) {
                this.valueChanged = false;
                this.updateValue();
            }
        }

        private updateValue():void {
            var mi:number = Math.log(this._value) / Math.log(2);
            this.source = "number.number_" + mi;
        }

        public playScale(merged:boolean = false):void {
            if (!merged) {
                this.scaleX = this.scaleY = 0.1;
                egret.Tween.get(this).to({scaleX: 1, scaleY: 1}, 100);
            } else {
                var self:TileUI = this;
                var fun:Function = function() {
                    egret.Tween.get(self).to({scaleX:1, scaleY:1}, 80);
                };
                this.scaleX = this.scaleY = 1;
                egret.Tween.get(this).to({scaleX:1.3, scaleY:1.3}, 80).call(fun, this);
            }
        }
    }
}