import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ComponentResponse } from 'philomathcode/classes/component-response';
// import { randomFill, randomInt  } from 'crypto';
import { InputResponse } from '../input-response';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input()
  public inputModel:any;

  @Input()
  public placeholder:any;

  @Input()
  public bootstrapFormControl:any;
  @Output()
  public outputChange:EventEmitter<any> = new EventEmitter();

  public InputComponentResponse:ComponentResponse = new ComponentResponse();

  constructor() {

   }

  ngOnInit(): void {
    this.InputComponentResponse.defaultInitialization("app-input");
    

  }

  

  inputChange(event:any)
  {
    this.InputComponentResponse.setCurrentDate();
    // console.log(event);
    this.InputComponentResponse.data = event.target.value;
    this.outputChange.emit(this.InputComponentResponse);
    // console.log("InputComponent event response sent: ", this.InputComponentResponse);
  }

}
