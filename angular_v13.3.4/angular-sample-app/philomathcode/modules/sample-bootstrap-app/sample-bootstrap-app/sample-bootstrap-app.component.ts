import { Component, OnInit } from '@angular/core';
import { TableData } from 'philomathcode/classes/table-data';
import { HttpCoreService } from 'philomathcode/modules/http/http-core.service';

@Component({
  selector: 'app-sample-bootstrap-app',
  templateUrl: './sample-bootstrap-app.component.html',
  styleUrls: ['./sample-bootstrap-app.component.scss']
})
export class SampleBootstrapAppComponent implements OnInit {

 

  constructor(private httpService: HttpCoreService) { }

  ngOnInit(): void {
   

  }

 

}
