import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { addform } from '../../model';

@Component({
  selector: 'app-add-form',
  standalone: false,
  
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
userForm! : FormGroup;
viewall : any;
constructor(private empService: EmployeeService){}
ngOnInit(){

  this.empService.getAllData().subscribe((res : any) =>{
    this.viewall = res.response;
   console.log(res);
})
  this.userForm = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[A-Za-z]+(?: [A-Za-z]+)*$/)
    ]),
    age: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[0-9]{2}$/)
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern((/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
    ]),
    number: new FormControl("", 
      [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]
    ),


  })
}
get name(){
  return this.userForm.get('name');
}
get age(){
  return this.userForm.get('age');
}
get email(){
  return this.userForm.get('email');
}
get number(){
  return this.userForm.get('number');
}
id:any;
onSubmit(){
  let submitModel : addform = {
    id : this.id?.value,
  name : this.name?.value,
  age : this.age?.value,
  number : this.number?.value,
  email  : this.email?.value
  }

this.empService.addform(submitModel).subscribe((res:any) => {
      this.viewall = res.response;

})
   this.userForm.reset()
}

reset(){
  this.userForm.reset();
}

}