import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalInput } from '../classes/modal-input';

@Component({
  selector: 'app-simple-modal-test',
  templateUrl: './simple-modal-test.component.html',
  styleUrls: ['./simple-modal-test.component.css']
})
export class SimpleModalTestComponent implements OnInit {

  public modalInputData!:ModalInput;

  @Output()
  public sampleModalTestOutput:EventEmitter<ModalInput> = new EventEmitter<ModalInput>();

  constructor() { }

  ngOnInit(): void {
    this.setModalInputData();
  }

  setModalInputData()
  {
    this.modalInputData = new ModalInput();
    this.modalInputData.displayText = "Are you Sure?";
    this.modalInputData.leftButtonText = "No";
    this.modalInputData.rightButtonText = "Yes";
    this.modalInputData.displayHeaderText = "Test Simple Modal Id: " + this.modalInputData.modalId;
    console.log("set sample modalinputdata",this.modalInputData);
  }

  simpleModalOutput(event:any)
  {
    // console.log("simpleModalOutput event response",event);
    this.sampleModalTestOutput.emit(event);
  }

}
