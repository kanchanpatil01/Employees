import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
// import { data } from "../models/employees-list.json";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  URL = "http://localhost:5555/data";

  constructor(private _http: HttpClient) { }

  onGet() {
    return this._http.get("http://localhost:5555/data");
  }

  onAdd(employee) {
    return this._http.post("http://localhost:5555/data", employee);
  }

  getCurrentData(id){
    return this._http.get("http://localhost:5555/data/" + id );
  }
 
  onEdit(id,employee) {
    return this._http.put("http://localhost:5555/data/" + id, employee)
  }
}
