import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ModalInput } from '../classes/modal-input';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input()
  public modalInput!:ModalInput;


  @Output()
  public simpleModalOutput = new EventEmitter<ModalInput>();

  constructor() { 
    // if(this.modalInput == null)
    // {
    //   this.modalInput = new ModalInput();
    //   this.modalInput.displayHeaderText = "";
    //   this.modalInput.displayText = "Are you sure?";
    //   this.modalInput.leftButtonText = "No";
    //   this.modalInput.leftButtonClicked = false;
    //   this.modalInput.rightButtonText = "Yes";
    //   this.modalInput.rightButtonClicked = false;
    //   this.modalInput.showModal = true;
    // }
  }

  ngOnInit(): void {
  }

  buttonClickBtn(buttonClicked:string)
  {
    this.modalInput.interactionTime = new Date();
    this.modalInput.showModal = false;  
    this.modalInput.leftButtonClicked = false;
    this.modalInput.rightButtonClicked = false;
    if(buttonClicked == "left")
    {
      this.modalInput.leftButtonClicked = true;
      this.modalInput.rightButtonClicked = false;
      this.simpleModalOutput.emit(this.modalInput);
      return;
    }
    if(buttonClicked == "right")
    {
      this.modalInput.leftButtonClicked = false;
      this.modalInput.rightButtonClicked = true;
      this.simpleModalOutput.emit(this.modalInput);  
      return;
 
     }
     this.simpleModalOutput.emit(this.modalInput); 
     return; 



  }


}
