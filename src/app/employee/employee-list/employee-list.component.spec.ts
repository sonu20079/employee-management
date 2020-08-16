// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from '../../shared/services/employee.service';
import { NotificationService } from '../../shared/services/notification.service';
import { SharedService } from '../../shared/services/shared.service';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from '../../shared/pipes/filter';
import { DESIGNATIONS, Designation } from '../../shared/dataTypes';
import { Employee } from '../../shared/models/employee';

@Injectable()
class MockRouter {
  navigate() {};
}

describe('EmployeeListComponent', () => {
  let fixture;
  let component;
  let employeeService:EmployeeService;
  let notificationService: NotificationService;
  let sharedService: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, ToastrModule.forRoot() ],
      declarations: [
        EmployeeListComponent,
        FilterPipe
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Router, useClass: MockRouter }
      ]
    }).overrideComponent(EmployeeListComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.debugElement.componentInstance;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.debugElement.componentInstance;
    employeeService = TestBed.get(EmployeeService);
    notificationService = TestBed.get(NotificationService);
    sharedService = TestBed.get(SharedService);
  });

  afterEach(() => {
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #getEmployees() with records', async () => {
    const employee = new Employee({id: '12', name: 'test', company_name: 'test.com', email: 'test@gmail.com', contact_no: '1212121212', designation: DESIGNATIONS[0]})
    spyOn(employeeService, 'employees').and.returnValue([employee]);
    component.getEmployees();
    fixture.detectChanges();
    expect(employeeService.employees).toHaveBeenCalled();
    expect(component.employees.length).toEqual(1);
  });

  it('should run #getEmployees() without records', async () => {
    spyOn(employeeService, 'employees').and.returnValue([]);
    component.getEmployees();
    fixture.detectChanges();
    expect(employeeService.employees).toHaveBeenCalled();
    expect(component.employees.length).toEqual(0);
  });

  it('should run #showDeleteModal()', async () => {
    component.showDeleteModal('123');
    expect(component.deleteModal.show).toBeTruthy();
    expect(component.deleteModal.id).toEqual('123');
  });

  it('should run #hideDeleteModal()', async () => {
    component.hideDeleteModal();
    expect(component.deleteModal.show).toBeFalse();
    expect(component.deleteModal.id).toEqual('');
  });

  it('should run #deleteEmployee()', async () => {
    const employee = new Employee({id: '12', name: 'test', company_name: 'test.com', email: 'test@gmail.com', contact_no: '1212121212', designation: DESIGNATIONS[0]})
    component.deleteModal.id = '12';
    component.deleteModal.show = true;
    spyOn(employeeService, 'employees').and.returnValue([employee]);
    spyOn(employeeService, 'deleteEmployee');
    component.getEmployees();
    component.deleteEmployee();
    fixture.detectChanges();
    expect(employeeService.deleteEmployee).toHaveBeenCalled();
  });
});
