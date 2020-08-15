import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string = '';
  @Output() searchEmit: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  searchEmployees() {
    this.searchEmit.emit(this.searchText);
  }

}
