import { Component, OnInit } from '@angular/core';
import { ComponentResponse } from 'philomathcode/classes/component-response';

@Component({
  selector: 'app-select-test',
  templateUrl: './select-test.component.html',
  styleUrls: ['./select-test.component.scss']
})
export class SelectTestComponent implements OnInit {
  public selectComponentResponse = new ComponentResponse();
  public selectOptions = [
    {"name":"ok","value":"desert"},
    {"name":"no","value":"nothing"}
    
  ]
  public selectTestComponentClientText = 
  {
    "selectDisplyText":"select component test"
  }
  constructor() { }

  ngOnInit(): void {
  }

  optionSelected(event:any)
  {
    this.selectComponentResponse = event;
  }

}
