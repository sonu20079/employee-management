// tslint:disable
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { EmployeeDetailComponent } from './employee-detail.component';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../shared/services/employee.service';

@Injectable()
class MockEmployeeService {
  getEmployee(id) {

  }

  employees() {
    return [];
  }
}

class MockActivatedRoute extends ActivatedRoute { 
  constructor() { 
    super(); 
    this.params = observableOf({id: "5"});
   }
  }

 describe('EmployeeDetailComponent', () => {
  let fixture;
  let component;
  let employeeService: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        EmployeeDetailComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        {
          provide: ActivatedRoute,
          useClass: MockActivatedRoute
        },
        { provide: EmployeeService, useClass: MockEmployeeService }
      ]
    }).overrideComponent(EmployeeDetailComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(EmployeeDetailComponent);
    component = fixture.debugElement.componentInstance;
  });

  beforeEach(() => {
    employeeService = TestBed.get(EmployeeService);
  });

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', fakeAsync (() => {
    spyOn(employeeService, 'getEmployee');
    component.ngOnInit();
    tick(0);
    expect(employeeService.getEmployee).toHaveBeenCalled();
  }));
});
