import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { editform } from '../../model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  standalone: false,
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css',

})
export class EditFormComponent {
  userForm: FormGroup;
  viewall: any;
  getid: any;
  activeData: any;
PersonName : any;
PersonAge: any;
PersonEmail:any;
PersonNum: any;
  constructor(private empService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router) {
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
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]),
      number: new FormControl("", [
        Validators.pattern(/^[0-9]{10}$/) // Number is optional but should be valid
      ]),
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.getid = params.AllValue;  // This should be 'AllValue' not '_id'
      console.log('Extracted ID:', this.getid);
    });
if(this.getid===0){
  this.userForm.reset();

}
else if(this.getid !== 0){

}
   this.empService.getAllEditForm(this.getid).subscribe((res:any) =>{
    this.viewall = res
    this.PersonName = this.viewall.name;
    this.PersonAge = this.viewall.age;
    this.PersonEmail = this.viewall.email;
    this.PersonNum = this.viewall.email;
console.log(this.viewall)
   })
  /*   this.empService.getAllActiverole().subscribe((res: any) => {
      this.activeData = res;
      console.log(this.activeData);
    }); */
  }

  fetchUserData(id: string) {this.empService.getAll(id).subscribe((res: any) => {
      this.viewall = res;
      if (this.viewall) {
        this.userForm.setValue({
          name: this.viewall.name || '',
          age: this.viewall.age || '',
          email: this.viewall.email || '',
          number: this.viewall.number || ''
        });
      }
    }); 
  }

  get name() {
    return this.userForm.get('name');
  }
  get age() {
    return this.userForm.get('age');
  }
  get email() {
    return this.userForm.get('email');
  }
  get number() {
    return this.userForm.get('number');
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    let submitModel: editform = {
      name: this.userForm.value.name,
      age: this.userForm.value.age,
      number: this.userForm.value.number,
      email: this.userForm.value.email
    };

    this.empService.ChangeManagementStatus(this.getid, submitModel).subscribe((res: any) => {
      console.log(res);
    });
  }

  reset() {
    this.userForm.reset();
  }

}
