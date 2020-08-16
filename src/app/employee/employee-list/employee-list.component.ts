//Angular imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Application Imports
import { Employee } from '../../shared/models/employee';
import { EmployeeService } from '../../shared/services/employee.service';
import { SharedService } from '../../shared/services/shared.service';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  searchText: string = '';
  deleteModal = {show: false, id: ''};

  constructor(private employeeService: EmployeeService,
              private notificatioService: NotificationService,
              public sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  //Fetch Employees from local storage
  getEmployees() {
    this.employees = this.employeeService.employees();
  }

  //Show delete modal
  showDeleteModal(employeeId) {
    this.deleteModal.show = true;
    this.deleteModal.id = employeeId;
  }

  //Hide Delete modal
  hideDeleteModal() {
    this.deleteModal = {show: false, id: ''};
  }

  //Delete Employee from local stoarge and get emplyees again.
  deleteEmployee() {
    this.employeeService.deleteEmployee(this.deleteModal.id);
    this.notificatioService.showSuccess("Employee Delete successfully.", 'Delete Employee');
    this.getEmployees();
    this.hideDeleteModal();
  }

  //Show update employee popup.
  editEmployee(employeeId: string) {
    this.sharedService.editEmployeeClicked.show = true;
    this.sharedService.editEmployeeClicked.employeeId = employeeId;
  }

  //Redirect to Employee detail
  employeeDetail(employeeId) {
    this.router.navigate(['/employee', employeeId]);
  }
}
