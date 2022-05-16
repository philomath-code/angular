import { Component, Input, OnInit } from '@angular/core';
import { TableDataRow } from 'philomathcode/classes/table-data-row';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public viewOptions = [
    { 'name': '10', 'value': '10' },
    { 'name': '50', 'value': '50' },
    { 'name': '100', 'value': '100' },
  ];
  public defaultViewOption = '100';
  @Input()
  public tableData:any;

  public mainTableRowsList:any;

  constructor() { }

  ngOnInit(): void {

    var tableDataRows = this.tableData.rows;
    this.tableData.rows = [];

    for(var key=0;key < tableDataRows.length;key++)
    {
      var newRowData = new TableDataRow();
      newRowData.rowData = tableDataRows[key];
      newRowData.keys = Object.keys(tableDataRows[key]);
      this.tableData.rows.push(newRowData);
      // console.log(Object.keys(tableDataRows[key]));
    }
    this.mainTableRowsList = this.tableData.rows;
    localStorage.setItem("rows",this.mainTableRowsList);
    console.log('on init local storage save',this.mainTableRowsList);
  }

  

  viewSelected(event: any) {
    console.log(event);
    // console.log(this.mainTableRowsList);
    //200 - 10vc - 190

    // var spliceNumber = this.mainTableRowsList.length - event.data;
    // this.tableData.rows = this.mainTableRowsList;
    // for(var i =0; i < spliceNumber;i++)
    // {
    //   this.tableData.rows.pop();
    // }
  }


}
