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
    this.tableData.rows = [];
   }
  public tableData = new TableData();
  

  public githubUser = "philomath-code";
  ngOnInit(): void {
    this.getGitHubRepos();
  }

  outputChange(event:any)
  {
    this.githubUser = event.data;
    this.githubUserInputGetData();
  }

  githubUserInputGetData()
  {
    if(this.githubUser.length > 4)
    {
      this.getGitHubRepos();
    }
  }

  getGitHubRepos()
  {
    var url = "https://api.github.com/users/" + this.githubUser + "/repos"; 
    this.httpService.getRequest(url).subscribe((result)=>{
      this.tableData.rows = result;
    },(error:any)=>{
      this.tableData.rows = [];
    });
  }

}
