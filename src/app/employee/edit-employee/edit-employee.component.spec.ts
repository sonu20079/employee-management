// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { EditEmployeeComponent } from './edit-employee.component';
import { EmployeeService } from '../../shared/services/employee.service';
import { SharedService } from '../../shared/services/shared.service';
import { NotificationService } from '../../shared/services/notification.service';
import { ToastrModule } from 'ngx-toastr';
import { DESIGNATIONS } from '../../shared/dataTypes';

@Injectable()
class MockEmployeeService {
  updateEmployee() {

  }
}


describe('EditEmployeeComponent', () => {
  let fixture;
  let component;
  let notificationService: NotificationService;
  let sharedService: SharedService;
  let employeeService:EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, ToastrModule.forRoot(), ],
      declarations: [
        EditEmployeeComponent        
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: EmployeeService, useClass: MockEmployeeService }
      ]
    }).overrideComponent(EditEmployeeComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(EditEmployeeComponent);
    component = fixture.debugElement.componentInstance;
  });

  beforeEach(() => {
    employeeService = TestBed.get(EmployeeService);
    notificationService = TestBed.get(NotificationService);
    sharedService = TestBed.get(SharedService);
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {

    component.ngOnInit();

  });

  it('should run #submit()',  () => {
    spyOn(employeeService, 'updateEmployee');
    const employee = {id: '12', name: 'test', email: 'test@gmail.com', designation: DESIGNATIONS[0], contact_no: '1212121212', company_name: 'test'}
    component.submit(employee);
    expect(employeeService.updateEmployee).toHaveBeenCalled();
  });

  it('should run #closeModal()',  () => {
    component.closeModal();
    expect(sharedService.editEmployeeClicked.show).toBeFalsy();
  });
});
