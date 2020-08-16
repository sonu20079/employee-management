// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { EmployeeFormComponent } from './employee-form.component';
import { SharedService } from '../../shared/services/shared.service';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../../shared/services/employee.service';
import { DESIGNATIONS } from '../../shared/dataTypes';


@Injectable()
class MockEmployeeService {
  getEmployee(id) {

  }
}


 describe('EmployeeFormComponent', () => {
  let fixture;
  let component;
  let employeeService:EmployeeService;
  let sharedService: SharedService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        EmployeeFormComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: EmployeeService, useClass: MockEmployeeService }
      ]
    }).overrideComponent(EmployeeFormComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.debugElement.componentInstance;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.debugElement.componentInstance;
    employeeService = TestBed.get(EmployeeService);
    sharedService = TestBed.get(SharedService);
  });


  afterEach(() => {
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    spyOn(employeeService, 'getEmployee');
    spyOn(component, 'initializeForm');
    component.ngOnInit();
    expect(component.initializeForm).toHaveBeenCalled();
  });

  it('should run #designations()', async () => {
    expect(component.designations).toBe(DESIGNATIONS);
  });
});
