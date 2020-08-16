// Angular Imports
import { Component, OnInit, Input } from '@angular/core';

//Application Imports
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeeService } from '../../shared/services/employee.service';
import { SharedService } from '../../shared/services/shared.service';
import { EmployeeData } from '../../shared/dataTypes';
import { NotificationService } from '../../shared/services/notification.service';
import { Employee } from '../../shared/models/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  @Input() employeeId: string;
  
  constructor(private employeeService: EmployeeService, public sharedService: SharedService, private notificatioService: NotificationService) { }


  ngOnInit(): void {

  }

  // Updating employee and close edit modal.
  submit(employee: Employee) {
    employee.id = this.sharedService.editEmployeeClicked.employeeId;
    this.employeeService.updateEmployee(employee);
    this.closeModal();
    this.notificatioService.showSuccess("Employee Edit successfully.", 'Edit Employee');
  }

  //Close edit modal
  closeModal() {
    this.sharedService.editEmployeeClicked = {show: false, employeeId: ''};
  }

}
