import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  serviceURL !: string;
  constructor(private http: HttpClient) { 
    // this.serviceURL = "http://localhost:3000/tasks"
    this.serviceURL = "https://clover-axiomatic-wholesaler.glitch.me/tasks"
   }
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.serviceURL,task)
  }
  getAllTask():Observable<Task[]>{
    return this.http.get<Task[]>(this.serviceURL)
  }
  deleteTask(task:Task):Observable<Task>{
    return this.http.delete<Task>(this.serviceURL+"/"+task.id)
  }
  editTask(task:Task):Observable<Task>{
    return this.http.put<Task>(this.serviceURL+"/"+task.id,task)
  }
  
}
