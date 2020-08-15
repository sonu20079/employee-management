import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './services/employee.service';
import { SharedService } from './services/shared.service';
import { FilterPipe } from './pipes/filter';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { NotificationService } from './services/notification.service';



@NgModule({
  declarations: [
    FilterPipe,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [EmployeeService, SharedService, NotificationService],
  exports: [FilterPipe, SearchComponent]
})
export class SharedModule { }
