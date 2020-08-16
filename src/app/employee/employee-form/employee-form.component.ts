//Angular Imports
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

//Application Imports
import { SharedService } from '../../shared/services/shared.service';
import { Designation, DESIGNATIONS, EmployeeData, AVATARS } from '../../shared/dataTypes';
import { EmployeeService } from '../../shared/services/employee.service';
import { Employee } from '../../shared/models/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  host: {
    '(document:click)': 'onClick($event)'
  }
})
export class EmployeeFormComponent implements OnInit {

  employeeForm: FormGroup;
  avatars = AVATARS;
  selectedAvatar = AVATARS[0];
  showAvatarDropdown = false;
  @Output() formEmit = new EventEmitter<Employee>()

  constructor(public sharedService: SharedService,
              private formBuilder: FormBuilder,
              private employeeService: EmployeeService) { }



  //Initialized form for add and edit both cases
  ngOnInit(): void {
    this.initializeForm();
  }

  //Prepare form for add and edit and in case of edit set values in form.
  initializeForm() {
    this.employeeForm = this.formBuilder.group({
      name: [null, Validators.required],
      company_name: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      contact_no: [null, [Validators.required, Validators.pattern("[0-9]{10}")]],
      designation: [Designation.SoftwareDeveloper],
      avatar: [null],
    });
    const employeeId = this.sharedService.editEmployeeClicked.employeeId;
    if(employeeId) {
      const employee = this.employeeService.getEmployee(employeeId);
      this.selectedAvatar = employee.avatar;
      this.employeeForm.patchValue(employee);
    }
  }


  // get designations
  get designations(): Designation[] {
    return DESIGNATIONS;
  }

  // getting form control on the basis of key
  getFormControl(key): AbstractControl {
    return this.employeeForm.get(key);
  }
  
  //Select avatar
  selectAvatar(avatar) {
    this.showAvatarDropdown = false;
     this.selectedAvatar = avatar;
  }

  //Checking if click on avatar select box header, then shows dropdown.
  onClick(event) {
    const element = event.target;
    if ((element.classList.contains('avatarRow'))) {
      this.showAvatarDropdown = !this.showAvatarDropdown;
    }
  }

  submit() {
    console.log(this.employeeForm)
    this.formEmit.emit(this.employeeForm.value);
  }

  //cancel dialog
  cancel() {
    if(this.sharedService.editEmployeeClicked.employeeId) {
      this.sharedService.editEmployeeClicked = {show: false, employeeId: ''};
    } else {
      this.sharedService.addEmployeeClicked = false
    }
  }
}