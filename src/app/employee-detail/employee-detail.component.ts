import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../shared/models/employee';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee
  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    const employeeId = this.activatedRoute.snapshot.params['id'];
    this.employeeService.employees.subscribe(employees => {
      this.employee =this.employeeService.getEmployee(employeeId);
    },
  (error) => {
    console.log(error);
  })

  }

}
