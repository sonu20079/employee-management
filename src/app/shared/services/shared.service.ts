import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
  // Add employee button is clicked or not
  addEmployeeClicked = false;
  
  // Edit employee button is clicked or not
  editEmployeeClicked = {employeeId: '', show: false}

  constructor() { }
}
