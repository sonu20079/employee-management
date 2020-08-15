import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/models/employee';
import { EmployeeService } from '../shared/services/employee.service';
import { SharedService } from '../shared/services/shared.service';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService,  private notificatioService: NotificationService, public sharedService: SharedService, private router: Router) { }

  employees: Employee[] = [];
  searchText: string = '';
  deleteModal = {show: false, id: ''};
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(hideModal?: boolean) {
    this.employeeService.employees.subscribe((employees: Employee[]) => {
        this.employees = employees;
        if(hideModal) {
          this.hideDeleteModal();
        }
    },
   (error) => {
     this.notificatioService.showError('Error during employees fetch', 'Error');
   })
  }

  showDeleteModal(employeeId) {
    this.deleteModal.show = true;
    this.deleteModal.id = employeeId;

  }

  hideDeleteModal() {
    this.deleteModal = {show: false, id: ''};
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.deleteModal.id);
    this.notificatioService.showSuccess("Employee Delete successfully.", 'Delete Employee');
    this.getEmployees(true);
  }

  editEmployee(employeeId: string) {
    this.sharedService.editEmployeeClicked.show = true;
    this.sharedService.editEmployeeClicked.employeeId = employeeId;
  }

  employeeDetail(employeeId) {
    this.router.navigate(['/employee', employeeId]);
  }

  searchEmployees() {

  }
}
