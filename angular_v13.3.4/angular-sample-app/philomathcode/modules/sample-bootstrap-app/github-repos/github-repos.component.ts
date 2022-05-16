import { Component, OnInit } from '@angular/core';
import { TableData } from 'philomathcode/classes/table-data';
import { HttpCoreService } from 'philomathcode/modules/http/http-core.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})
export class GithubReposComponent implements OnInit {
  public githubUser = "philomath-code";
  public tableData = new TableData();

  constructor(private httpService:HttpCoreService) {
    this.tableData.rows = [];

  }

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
