import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeeService } from '../shared/services/employee.service';
import { SharedService } from '../shared/services/shared.service';
import { EmployeeData } from '../shared/dataTypes';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') employeeFormComponent: EmployeeFormComponent;
  @Input() employeeId: string;

  
  constructor(private employeeService: EmployeeService, public sharedService: SharedService, private notificatioService: NotificationService) { }


  ngOnInit(): void {

  }

  submit() {
    const employee: EmployeeData = this.employeeFormComponent.employeeForm.value;
    employee.id = this.sharedService.editEmployeeClicked.employeeId;
    this.employeeService.updateEmployee(employee);
    this.closeModal();
    this.notificatioService.showSuccess("Employee Edit successfully.", 'Edit Employee');
  }

  closeModal() {
    this.sharedService.editEmployeeClicked = {show: false, employeeId: ''};
  }

}
