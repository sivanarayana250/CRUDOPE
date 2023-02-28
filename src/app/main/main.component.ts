import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  employeeForm: any = FormGroup;
  addnewEmployee:boolean = false ;
  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      'id': new FormControl(null, [Validators.required]),
      'company': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'email': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'firstName': new FormControl(null, [Validators.required]),
      'dob': new FormControl(null, [Validators.required]),
      'gender': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'confirmPassword': new FormControl(null, [Validators.required]),
    });
    // console.log(this.employeeForm.invalid)
  }


onPasswordChange() {
  if (this.confirm_password.value == this.password.value) {
    this.confirm_password.setErrors(null);
  } else {
    this.confirm_password.setErrors({ mismatch: true });
  }
}


get password(): AbstractControl {
  return this.employeeForm.controls['password'];
}

get confirm_password(): AbstractControl {
  return this.employeeForm.controls['confirmPassword'];
}

  public numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  public addEmployee() {
    this.addnewEmployee = true;

  }

  public deleteEmployee(data:any) {
      this.commonService.deleteEmployee(data.index);
  }

  public editData (data:any) {
    this.employeeForm.patchValue(data.employee);
    this.commonService.editToggle =!this.commonService.editToggle;
    this.addnewEmployee = !this.addnewEmployee;
    

  }
  onNoClick() {
    this.addnewEmployee = false;
  }
  onSubmit() {
    if( this.commonService.editToggle) {
      this.commonService.editEmployee(this.employeeForm.value);
      this.commonService.editToggle =!this.commonService.editToggle;
    }
    else{
      this.commonService.addEmployee(this.employeeForm.value);
    }
    this.employeeForm.reset();
    this.addnewEmployee = false;
  }
}



