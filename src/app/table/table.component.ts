import { Component, Output, OnInit, EventEmitter, } from '@angular/core';
import { CommonService } from '../common.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


employess:any;

@Output() employeeData = new EventEmitter<any>();
@Output() editData = new EventEmitter<any>();
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.employess = this.commonService.EMPLOYEE_DATA;
  }



  public deleteEmployee(i: number) {
    this.employeeData.emit(i);
  }

  public EditEmployee( employee:Employee , index: number) {
    this.editData.emit({employee: employee, index: index});
  }


}


