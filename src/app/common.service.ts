import { Injectable } from '@angular/core';   
import { Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
   EMPLOYEE_DATA:Employee[] = [{
    id: 1, firstName: "Siva", company: "Infosys", phone: "1234567890", email: "siva@gmail.com", lastName: "narayana" , dob: "1997-10-07" ,gender :"male"
  },
  {
   id: 2,  firstName: "Uday", company: "Infosys", phone: "1234567890", email: "uday@gmail.com", lastName: "kumar" , dob: "1997-10-08",gender :"male"
  },
  {
    id: 3,  firstName: "tejesh", company: "Infosys", phone: "1234567890", email: "tejesh@gmail.com", lastName: "kumar" , dob: "1997-10-08",gender :"male"
   },
]
  editToggle:boolean = false
  constructor() { }

  public addEmployee(employee:Employee) {
    employee.id = this.EMPLOYEE_DATA.length;
    this.EMPLOYEE_DATA.unshift(employee);

  }

  public deleteEmployee(index:number) {
    this.EMPLOYEE_DATA.splice(index,1);
  }

  public editEmployee(employeeData: Employee) {
    let indexToUpdate = this.EMPLOYEE_DATA.findIndex(item => item.id === employeeData.id);
    this.EMPLOYEE_DATA[indexToUpdate] = employeeData;
  }
}
  



