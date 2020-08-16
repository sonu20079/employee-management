//Angular imports
import { Component, OnInit } from '@angular/core';

//Application Imports
import { EmployeeData } from '../../shared/dataTypes';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeeService } from '../../shared/services/employee.service';
import { SharedService } from '../../shared/services/shared.service';
import { NotificationService } from '../../shared/services/notification.service';
import { Employee } from '../../shared/models/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  
  constructor(private employeeService: EmployeeService,
              private notificatioService: NotificationService,
              public sharedService: SharedService) {
   }

  ngOnInit(): void {}

  submit(employee: Employee) {
    employee.id = Date.now().toString();
    this.employeeService.saveEmployee(employee);
    this.sharedService.addEmployeeClicked = false;
    this.notificatioService.showSuccess("Employee added successfully.", 'Add Employee')
  }
}
