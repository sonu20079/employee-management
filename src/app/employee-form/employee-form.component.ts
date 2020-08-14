import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Designation, DESIGNATIONS } from '../shared/dataTypes';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm: FormGroup;
  constructor(public sharedService: SharedService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
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
  }

  get designations(): Designation[] {
    return DESIGNATIONS;
  }

  getFormControl(key): AbstractControl {
    return this.employeeForm.get(key);
  }

  submit() {
    
  }
}
