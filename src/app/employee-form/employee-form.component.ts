import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Designation, DESIGNATIONS, EmployeeData } from '../shared/dataTypes';
import { EmployeeService } from '../shared/services/employee.service';
import { Employee } from '../shared/models/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm: FormGroup;
  @Output() formEmit: EventEmitter<FormGroup> = new EventEmitter();
  constructor(public sharedService: SharedService, private formBuilder: FormBuilder, private employeeService: EmployeeService) { }


  ngOnInit(): void {
    console.log(this.sharedService.editEmployeeClicked)
    this.createEmployeeForm();
  }

  createEmployeeForm() {
    this.employeeForm = this.formBuilder.group({
      name: [null, Validators.required],
      company_name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      contact_no: [null, [Validators.required]],
      designation: [Designation.SoftwareDeveloper],
    });
     const employeeId = this.sharedService.editEmployeeClicked.employeeId;
    if(employeeId) {
      const employee = this.employeeService.getEmployee(employeeId)
      this.employeeForm.patchValue(employee);
    }
  }

  get designations(): Designation[] {
    return DESIGNATIONS;
  }

  getFormControl(key): AbstractControl {
    return this.employeeForm.get(key);
  }

  submit() {
    this.formEmit.emit(this.employeeForm);
  }

  getCurrencies() {
    return [{name: 'INR'}, {name: 'US$'}]
  }
  showDropdown = false;
  showHideDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
