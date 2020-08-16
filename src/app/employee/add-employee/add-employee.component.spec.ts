// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { AddEmployeeComponent } from './add-employee.component';
import { EmployeeService } from '../../shared/services/employee.service';
import { NotificationService } from '../../shared/services/notification.service';
import { SharedService } from '../../shared/services/shared.service';
import { ToastrModule } from 'ngx-toastr';
import { DESIGNATIONS } from '../../shared/dataTypes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Injectable()
class MockEmployeeService {
  saveEmployee() {

  }
}

describe('AddEmployeeComponent', () => {
  let fixture;
  let component;
  let employeeService:EmployeeService;
  let notificationService: NotificationService;
  let sharedService: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, ToastrModule.forRoot(), BrowserAnimationsModule ],
      declarations: [
        AddEmployeeComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [{provide: EmployeeService, useClass: MockEmployeeService}]
    }).overrideComponent(AddEmployeeComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.debugElement.componentInstance;
  });

  beforeEach(() => {
    employeeService = TestBed.get(EmployeeService);
    notificationService = TestBed.get(NotificationService);
    sharedService = TestBed.get(SharedService);
    fixture.detectChanges();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    component.ngOnInit();
  });

  it('should run #submit()',  () => {
    spyOn(employeeService, 'saveEmployee');
    const employee = {id: '12', name: 'test', email: 'test@gmail.com', designation: DESIGNATIONS[0], contact_no: '1212121212', company_name: 'test'}
    component.submit(employee);
    expect(employeeService.saveEmployee).toHaveBeenCalled();
    expect(sharedService.addEmployeeClicked).toBeFalsy();
  });
});
