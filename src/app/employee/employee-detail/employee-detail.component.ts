//Angular imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Application imports
import { Employee } from '../../shared/models/employee';
import { EmployeeService } from '../../shared/services/employee.service';
import { StorageService } from '../../shared/Utils/storage.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;

  constructor(private activatedRoute: ActivatedRoute,
              private employeeService: EmployeeService) { }

  //Getting employee id from route and fetching record for that ID.
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parmas) => {
      const employeeId: string = parmas['id'];
      this.employeeService.employees();
      this.employee = this.employeeService.getEmployee(employeeId);
    })
  }
}
