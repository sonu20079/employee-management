import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public sharedService: SharedService, private route: Router) { }

  ngOnInit(): void {

  }

  gotToEmployees() {
    this.route.navigate(['/']);

  }
}
