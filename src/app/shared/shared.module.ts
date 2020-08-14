import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './services/employee.service';
import { SharedService } from './services/shared.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [EmployeeService, SharedService]
})
export class SharedModule { }
