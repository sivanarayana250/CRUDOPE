import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  EMPLOYEE_DATA: Employee[] = [
    {
      id: 0,
      firstName: 'Alex',
      company: 'INFOSYS',
      phone: 1234567890,
      email: 'alex@gmail.com',
      lastName: 'George',
      dob: '09-07-1997',
      gender: 'male',
      password: 'eref',
      confirmPassword: 'eref',
    },
    {
      id: 1,
      firstName: 'Jayanth',
      company: 'TCS',
      phone: 1234567890,
      email: 'jayanth@gmail.com',
      lastName: 'kelli',
      dob: '10-08-1996',
      gender: 'male',
      password: 'werfrf',
      confirmPassword: 'werfrf'
    },
    {
      id: 2,
      firstName: 'Raja',
      company: 'TECHIE',
      phone: 1234567890,
      email: 'raja@gmail.com',
      lastName: 'kumar',
      dob: '10-08-1995',
      gender: 'male',
      password: 'wefd',
      confirmPassword:'wefd',
    },
  ];
  editToggle: boolean = false;
  constructor() {}

  public addEmployee(employee: Employee) {
    employee.id = this.EMPLOYEE_DATA.length;
    this.EMPLOYEE_DATA.push(employee);
  }

  public deleteEmployee(index: number) {
    this.EMPLOYEE_DATA.splice(index, 1);
  }

  public editEmployee(employeeData: Employee) {
    let indexToUpdate = this.EMPLOYEE_DATA.findIndex(
      (item) => item.id === employeeData.id
    );
    this.EMPLOYEE_DATA[indexToUpdate] = employeeData;
  }
}
