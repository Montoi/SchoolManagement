import { Component } from '@angular/core';
import { navbarData } from '../../consts/dashboard-links';
import { dashboardLink } from '../../models/dashboard-links.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  public links: dashboardLink[] = [];

  collapsed = false;
  constructor(){
    this.links = navbarData;
    
  }

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
  }

}
