import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public websitename = "Philomathcode";
  public public_routes =
  [
    {"name":"Home","route":"/home"},
    // {"name":"Table","route":"/table"},
    {"name":"Components","route":"/components"},
    {"name":"Input","route":"/components/input"},
    {"name":"Select","route":"/components/select"},
    {"name":"Table","route":"/components/table"},
    // {"name":"Input","route":"/components/input"},


  ];

  

  public showSideNav:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToRoute(route:string)
  {
    this.router.navigate([route]);
    this.closeNav();
  }

   openNav() {

    this.showSideNav = true;
    //  var document =
    // document.getElementById("mySidenav").style.width = "250px";
}

 closeNav() {
   this.showSideNav = false;
    // document.getElementById("mySidenav").style.width = "0";
}

}
