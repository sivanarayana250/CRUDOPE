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
      'phone': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'firstName': new FormControl(null, [Validators.required]),
      'dob': new FormControl(null, [Validators.required]),
      'gender': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'confirmPassword': new FormControl(null, [Validators.required]),
    });
    this.employeeForm.addValidators(
      matchValidator(this.employeeForm.get('password'), this.employeeForm.get('confirmPassword'))
    );

  }
  public addEmployee() {
    this.addnewEmployee = true;

  }
  deleteEmployee(data:any) {
      this.commonService.deleteEmployee(data.index);
  }

  editData (data:any) {
    this.employeeForm.patchValue(data.employee);
    this.commonService.editToggle =!this.commonService.editToggle;
    this.addnewEmployee = !this.addnewEmployee;
    console.log(this.employeeForm.value,  this.commonService.editToggle);

  }
  onNoClick() {
    this.addnewEmployee = false;
  }
  onSubmit() {
    console.log(this.employeeForm.value);
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

function matchValidator(
  control: AbstractControl,
  controlTwo: AbstractControl
): ValidatorFn {
  return () => {
    if (control.value !== controlTwo.value)
      return { match_error: 'Value does not match' };
    return null;
  };
}

