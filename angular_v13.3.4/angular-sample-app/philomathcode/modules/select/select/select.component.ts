import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponentResponse } from 'philomathcode/classes/component-response';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input()
  public options:any;
  @Input()
  public placeholder:any;
  @Input()
  public selectModel:any;
  @Input()
  public bootstrapFormControl:any;
  @Output()
  public optionSelected:EventEmitter<any> = new EventEmitter();
  @Input()
  public optionDisplayParameter:any;
  @Input()
  public optionValueParameter:any;
  
  public selectComponentResponse = new ComponentResponse();
  constructor() { }

  ngOnInit(): void {

    this.selectComponentResponse.defaultInitialization("app-select");
    
  }

  optionSelectChange(event:any)
  {
    this.selectComponentResponse.setCurrentDate();
    this.selectComponentResponse.data = event.target.value;
    this.optionSelected.emit(this.selectComponentResponse);
  }


}
