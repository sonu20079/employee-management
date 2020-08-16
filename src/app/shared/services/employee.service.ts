//Angular imports
import { Injectable } from '@angular/core';

//Application imports
import { Employee } from '../models/employee';
import { Designation, EmployeeData } from '../dataTypes';
import {StorageService} from '../Utils/storage.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private allEmployees: Employee[] = [];

  constructor() { }


  // Get All employees from local storage
  employees(): Employee[] {
    this.allEmployees = StorageService.getLocalStorage('employees', []);
    return this.allEmployees;
  }

  // Save employee in local storage
  saveEmployee(employeeData) {
      this.allEmployees.unshift(new Employee(employeeData));
      StorageService.setLocalStorage('employees', this.allEmployees);
  }

  //Delete employee from local storage
  deleteEmployee(employeeId: string) {
    this.allEmployees = this.allEmployees.filter(employee => employee.id != employeeId);
    StorageService.setLocalStorage('employees', this.allEmployees);
  }

  // Get employee by employee id fromlocal storage
  getEmployee(employeeId: string) {
    return this.allEmployees.find(employee => employee.id == employeeId);
  }

  //Update Employee
  updateEmployee(employee: Employee) {
    const index = this.allEmployees.findIndex((emp) => emp.id === employee.id);
    this.allEmployees[index] = employee
    StorageService.setLocalStorage('employees', this.allEmployees);
  }
}
