/**
 * Created by airead on 15/8/1.
 */
module game.controller {
    export class StartupCommand extends  puremvc.MacroCommand {
        public constructor() {
            super();
        }

        public initializeMacroCommand():void {
            console.log('init StartupCommand');
            this.addSubCommand(ControllerPrepCommand);
            this.addSubCommand(ModelPrepCommand);
        }
    }
}