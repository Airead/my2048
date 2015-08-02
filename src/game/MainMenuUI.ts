/**
 * Created by airead on 15/8/1.
 */
module game {
    export class MainMenuUI extends egret.gui.SkinnableComponent {
        public resetButton:egret.gui.Button;
        public scoreLabel:egret.gui.Label;
        public highScoreLabel:egret.gui.Label;
        public addLabel:egret.gui.Label;

        public constructor() {
            super();
            this.skinName = skins.simple.MainMenuUISkin;
            this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        }

        public createCompleteEvent(event:egret.gui.UIEvent):void {
            this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            ApplicationFacade.getInstance().registerMediator(new view.MainMenuMediator(this));
        }


        public partAdded(partName:string, instance:any):void {
            super.partAdded(partName, instance);

            if (this.addLabel == instance) {
                this.addLabel.visible = false;
            }
        }

        private  moveEffect_effectEndHandler():void {
            this.addLabel.visible = false;
        }

        public playScoreEffect(addScore:number):void {
            this.addLabel.visible = true;
            this.addLabel.text = '+'.concat(addScore.toString());
            egret.Tween.removeTweens(this.addLabel);
            this.addLabel.y = 25;
            egret.Tween.get(this.addLabel).to({y:0}, 300).call(this.moveEffect_effectEndHandler, this);
        }
    }
}