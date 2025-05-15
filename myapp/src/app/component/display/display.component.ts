import { Component } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  standalone: false,
  
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
 viewAll:any;
  getId:any;
constructor(private empservice: EmployeeService, private Activated: ActivatedRoute, private router: Router){}

ngOnInit(){
  this.Activated.queryParams.subscribe((param:any) =>{
   this.getId = param.AllValue;
   console.log("getid", this.getId);
   
  })
  this.empservice.collectAll(this.getId).subscribe((res:any)=> {
    this.viewAll = res;
    console.log("viewall",this.viewAll)
  })
}

}
