import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable, of } from 'rxjs';
import { Designation } from '../dataTypes';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private allemployees: Employee[] = [{id: '1', name: 'sonu sharma', email: 'sonu@gmail.com', company_name: 'dfdsf', contact_no: '9810859445', designation: Designation.SeniorSoftwareDeveloper}];

  constructor() { }


  get employees(): Observable<Employee[]> {
      return of(this.allemployees);
  }

  set employee(employee: Employee) {
      this.allemployees.push(employee);
  }

  deleteEmployee(employeeId: string) {
    this.allemployees = this.allemployees.filter(employee => employee.id != employeeId)
  }

  getEmployee(employeeId: string) {
    return this.allemployees.find(employee => employee.id == employeeId);
  }

  updateEmployee(employee: Employee) {
    var updateEmployee = this.getEmployee(employee.id);
    updateEmployee = {...employee};
  }
}
