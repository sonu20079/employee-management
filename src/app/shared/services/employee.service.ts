import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable, of } from 'rxjs';
import { Designation, EmployeeData } from '../dataTypes';
import {StorageService} from '../Utils/storage.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private allEmployees: Employee[] = [];

  constructor() { }


  get employees(): Observable<Employee[]> {
      this.allEmployees = StorageService.getLocalStorage('employees');
      return of(this.allEmployees);
  }

  saveEmployee(employeeData) {
      this.allEmployees.push(new Employee(employeeData));
      StorageService.setLocalStorage('employees', this.allEmployees);
  }

  deleteEmployee(employeeId: string) {
    this.allEmployees = this.allEmployees.filter(employee => employee.id != employeeId);
    StorageService.setLocalStorage('employees', this.allEmployees);
  }

  getEmployee(employeeId: string) {
    return this.allEmployees.find(employee => employee.id == employeeId);
  }

  updateEmployee(employee: Employee) {
    const index = this.allEmployees.findIndex((emp) => emp.id === employee.id);
    this.allEmployees[index] = employee
    StorageService.setLocalStorage('employees', this.allEmployees);
  }
}
