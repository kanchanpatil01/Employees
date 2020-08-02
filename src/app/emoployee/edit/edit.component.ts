import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {


  id: number;
  header: string;

  employeeObj:any = {
    id: "",
    name: "",
    phone: "",
    address: {
      city: "",
      address_line1: "",
      address_line2: "",
      postal_code: ""
    }
  };

  constructor(private route: ActivatedRoute, private empService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0? "Add Employee" : "Edit Employee";

    if( this.id !== 0) {
      this.empService.getCurrentData(this.route.snapshot.params.id).subscribe((res)=>{
        this.employeeObj = res;
      });
    }
  }

  onSubmit(form: NgForm) {

    let employee = {
      id: form.value.id,
      name: form.value.name,
      phone: form.value.phone,
      address: {
        city: form.value.city,
        address_line1: form.value.address_line1,
        address_line2: form.value.address_line2,
        postal_code: form.value.postal_code
      }
    };

    if(this.id === 0) {
      this.empService.onAdd(employee).subscribe((response) => {
        this.router.navigateByUrl('');
      });
    } else {
      this.empService.onEdit(this.id, employee).subscribe(() => {
        this.router.navigateByUrl('');
      });
    }
  }

  // deleteEmployee(employee) {
  //   this.empService.onDelete(employee).subscribe(() => {
  //     this.router.navigateByUrl('');
  //   });
  // }




}
