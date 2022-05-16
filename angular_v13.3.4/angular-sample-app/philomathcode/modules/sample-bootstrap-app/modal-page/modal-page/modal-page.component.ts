import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.css']
})
export class ModalPageComponent implements OnInit {

  public responseFromSampleModalTestOutput:any;

  constructor() { }

  ngOnInit(): void {
  }

  sampleModalTestOutput(event:any)
  {
    this.responseFromSampleModalTestOutput = event;
  }

}
