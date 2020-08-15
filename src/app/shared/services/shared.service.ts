import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  addEmployeeClicked = false;
  editEmployeeClicked = {employeeId: '', show: false}
  constructor() { }
}
