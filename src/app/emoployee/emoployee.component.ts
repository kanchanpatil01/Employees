import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service'
import { Employee } from '../models/employee.model';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-emoployee',
  templateUrl: './emoployee.component.html',
  styleUrls: ['./emoployee.component.css']
})
export class EmoployeeComponent implements OnInit {
  re = /\D/;
  employees = [];
  searchName:string = '';

  constructor(private employeeService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.employeeService.onGet().subscribe((response) => {
      this.employees = Object.values(response);
    });
  }

  checkPhone(phone_no) {
    if (this.re.test(phone_no)) {
      return true;
    }
    else {
      return false;
    }
  }


}
