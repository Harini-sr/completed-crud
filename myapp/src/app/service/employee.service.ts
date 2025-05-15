import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addform, editform } from '../model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  
  private readonly apiUrl = 'http://localhost:4500/userDetails';

  private readonly editformAPI = '/edit/';
  /* edit form */
 
  
 constructor(private http: HttpClient) {}
  
/* addform */

  getAllData(){
    return this.http.get<any>(this.apiUrl);
  }
  addform(submitModel: any){
    return this.http.post<any>(this.apiUrl, submitModel);
  }
  viewData(){
    return this.http.get(this.apiUrl)
  }

  /* edit form */
  getAll(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  
  getAllEditForm(id: any) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
    
  } 

    
  ChangeManagementStatus(id: any, model: editform) {
    return this.http.put(`${this.apiUrl}/${id}`, model);

  }
  getAllActiverole(){
    return this.http.get(this.apiUrl)
  }
  editform(model: any, id: any) {
    return this.http.put(`${this.apiUrl}${this.editformAPI}${id}`, model);
  }
  
  /* view data */
  collectAll(id:any){
     return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  /* delete */
  deleteData(id:any){
    return this.http.delete<any>(`${this.apiUrl}/${id}`);

  }
}
