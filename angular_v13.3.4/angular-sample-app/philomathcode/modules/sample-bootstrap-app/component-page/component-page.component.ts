import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-page',
  templateUrl: './component-page.component.html',
  styleUrls: ['./component-page.component.scss']
})
export class ComponentPageComponent implements OnInit {
  public public_routes =
  [
    {"name":"Home","route":"/home"},
    // {"name":"Table","route":"/table"},
    {"name":"Components","route":"/components"},
    {"name":"Input","route":"/components/input"},
    {"name":"Select","route":"/components/select"},
    {"name":"Table","route":"/components/table"},
    {"name":"Modal","route":"/components/modal"},

    // {"name":"Input","route":"/components/input"},


  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
