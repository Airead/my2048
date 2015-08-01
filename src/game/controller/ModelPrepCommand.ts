module game.controller {
    export class ModelPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
        public constructor() {
            super();
        }


        public execute(notification:puremvc.INotification):void {
            console.log("prepare gridProxy");
            this.facade.registerProxy(new game.model.GridProxy());
        }
    }
}