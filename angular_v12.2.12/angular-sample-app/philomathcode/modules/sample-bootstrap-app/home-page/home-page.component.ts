import { Component, OnInit } from '@angular/core';
import { TableData } from 'philomathcode/classes/table-data';
import { HttpCoreService } from 'philomathcode/modules/http/http-core.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private httpService:HttpCoreService) {
   }

  public angularAppDetails =
  {
    'version':"12.2.12"
  }
  
  

  ngOnInit(): void {
  }

  

}
