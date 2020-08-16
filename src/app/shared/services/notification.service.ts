// ANgular imports
import { Injectable } from '@angular/core';

//Third party imports
import { ToastrService } from 'ngx-toastr';
  
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(private toastr: ToastrService) { }
  
  // show success toaster message
  showSuccess(message, title){
      this.toastr.success(message, title)
  }
  
  // show Error toaster message
  showError(message, title){
      this.toastr.error(message, title)
  }
  
  // show Info toaster message
  showInfo(message, title){
      this.toastr.info(message, title)
  }
  
  // show warning toaster message
  showWarning(message, title){
      this.toastr.warning(message, title)
  }
  
}