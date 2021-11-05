import { Component, OnInit } from '@angular/core';
import { ComponentRequest } from 'philomathcode/classes/component-request';
import { ComponentResponse } from 'philomathcode/classes/component-response';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent implements OnInit {

  public inputComponentRequest = new ComponentRequest();
  public inputComponentResponse:any;
  public inputTestComponentClientText = 
  {
    "inputDisplyText":"input component test"
  }

  constructor() {
    this.setInputComponentDisplayText();
   }

   setInputComponentDisplayText()
   {
    if(this.inputComponentRequest != null)
    {
      if(this.inputComponentRequest.displayText)
      {
        if(this.inputComponentRequest.displayText.length == 0)
        {
          this.inputComponentRequest.displayText= this.inputTestComponentClientText.inputDisplyText;
          

        }
      }
    }

   }

   outputChange(event:any)
   {
     this.inputComponentResponse = event;
   }

  ngOnInit(): void {

    this.setInputComponentDisplayText();
    
  }


}
