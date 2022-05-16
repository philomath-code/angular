import { Component, OnInit } from '@angular/core';
import { TableData } from 'philomathcode/classes/table-data';
import { HttpCoreService } from 'philomathcode/modules/http/http-core.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {
  public tableData: TableData = new TableData();
  public viewOptions = [
    { 'name': '10', 'value': '10' },
    { 'name': '50', 'value': '50' },
    { 'name': '100', 'value': '100' },
  ];
  public defaultViewOption = '100';
  constructor(private httpService: HttpCoreService) { }

  ngOnInit(): void {
    this.tableData.columns = ['id', 'uniqueName', 'date'];
    this.tableData.rows = [];
    
    var url = "https://localhost:5001/sample/randomsampledata";
    this.httpService.getRequest(url).subscribe((result: any) => {
      this.tableData.rows = result;
    }, (err: any) => {
      for (var i = 0; i < 100; i++) {
        var newObject =
        {
          'id': Math.random(),
          'name': Math.random().toString(16).substr(2, 8),
          'age': Math.random()
        }
        this.tableData.rows.push(newObject);
      }
      this.tableData.rows = [{ 'id': 1, 'name': 'danny', 'age': '30' }];
    });
  }

  viewSelected(event: any) {
    console.log(event);
  }

}
