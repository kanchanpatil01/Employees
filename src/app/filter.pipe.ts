import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sName: string): any {
    sName = sName.toLowerCase();
    if(sName==="") {
      return value;
    }
    const employeeArray:any[] = [];
    for(let i=0; i<=value.length; i++) {
      if(value[i] !== undefined ) {
        let empName = value[i].name.toLowerCase();
        let empCity = value[i].address.city.toLowerCase();
        if( empName.includes(sName) || empCity.includes(sName) ) {
          employeeArray.push(value[i]);
        }
      }
    }
    return employeeArray;
  }

}
