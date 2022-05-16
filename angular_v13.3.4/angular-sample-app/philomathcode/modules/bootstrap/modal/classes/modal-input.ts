import * as uuid from 'uuid';
export class ModalInput {

    public displayText!:string;
    public displayHeaderText:any;
    public leftButtonText:any;
    public leftButtonClicked!:boolean;

    public rightButtonText:any;
    public rightButtonClicked!:boolean;
    public modalId:string;
    public showModal!:boolean;
    public interactionTime!:Date;

    constructor()
    {
        
        this.modalId =  uuid.v4();
        this.leftButtonClicked = false;
        this.rightButtonClicked = false;
        this.showModal = false;
        this.interactionTime = new Date();
    }

}
