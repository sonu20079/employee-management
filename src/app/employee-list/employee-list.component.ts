import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/models/employee';
import { EmployeeService } from '../shared/services/employee.service';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService, public sharedService: SharedService) { }

  employees: Employee[] = [];
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.employees.subscribe((employees: Employee[]) => {
        this.employees = employees;
    })
  }

}
