import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-form',
  standalone: false,
  
  templateUrl: './view-form.component.html',
  styleUrl: './view-form.component.css'
})
export class ViewFormComponent {
dataSource! : MatTableDataSource<any>;
viewall: any;
displayedColumns : string[] = [
  'id',
  'name',
  'age',
  'email',
  'number',
  'edit',
  'view',
  'delete'

];
id:any;
constructor(private empService: EmployeeService, private router: Router){}

ngOnInit(){
  this.empService.viewData().subscribe((res:any) => {
    this.viewall = res;
    this.dataSource = new MatTableDataSource(this.viewall);
    console.log(this.viewall)
  })
}

edit(id: string) {
  this.router.navigate([`edit-form/${id}`], {
   queryParams : {AllValue : id}
  }); 
  console.log(id,"id clicked");
}

  view(id:any){
this.router.navigate([`display/${id}`],{
  queryParams : {AllValue : id}
})
  }
  delete(id:any){
    this.empService.deleteData(id).subscribe((res:any) =>{
   console.log(res);
   
    })
      }
    
}
