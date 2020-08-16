//Angular Imports
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

//Application imports
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isHomeUrl: boolean = true;
  
  constructor(public sharedService: SharedService, private router: Router) { }

  //Checking for current route
  ngOnInit(): void {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomeUrl = this.router.url.includes('employees');
      }
    });
  }

  // Redirect to employees.
  gotToEmployees() {
    this.router.navigate(['/']);

  }
}
