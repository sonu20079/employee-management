import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeData } from '../shared/dataTypes';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeeService } from '../shared/services/employee.service';
import { SharedService } from '../shared/services/shared.service';
import { IndividualConfig } from 'ngx-toastr';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') employeeFormComponent: EmployeeFormComponent;
  options: IndividualConfig;
  
  constructor(private employeeService: EmployeeService, private notificatioService: NotificationService, public sharedService: SharedService) {
   }

  ngOnInit(): void {
  }

  submit() {
    const employee: EmployeeData = this.employeeFormComponent.employeeForm.value;
    employee.id = Date.now().toString();
    this.employeeService.saveEmployee(employee);
    this.sharedService.addEmployeeClicked = false;
    this.notificatioService.showSuccess("Employee added successfully.", 'Add Employee')
  }
}
