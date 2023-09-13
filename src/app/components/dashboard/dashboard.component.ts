import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Task } from 'src/app/models/task.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  taskObj: Task = new Task();
  taskArr: Task[] = [];
  addTaskValue: string = '';
  editTaskValue:string='';
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.addTaskValue = ''
    this.editTaskValue = ''
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }
  addTask() {
    this.taskObj.task = this.addTaskValue
    this.taskObj.isCompleted = false;
    this.crudService.addTask(this.taskObj).subscribe(
      data => {this.ngOnInit();this.addTaskValue='';}, 
      err => {alert(err);}
    )
  }
  editTask() {
    this.taskObj.task = this.editTaskValue
    this.crudService.editTask(this.taskObj).subscribe(
      data => {this.ngOnInit();},
      err => {alert("Failed to update task")}
    )
  }
  delteTask(task: Task) {
    this.crudService.deleteTask(task).subscribe(
      data=>{this.ngOnInit()},
      err=>{alert("failed to delete")}
    )
  }
  completeTask(task:Task){
    this.taskObj = task;
    this.taskObj.isCompleted = true;
    this.crudService.editTask(this.taskObj).subscribe(
      data=>{this.ngOnInit();},
      err=>{alert("Failed to compelte")}
    )
  }
  getAllTask() {
    this.crudService.getAllTask().subscribe(
      data => {this.taskArr = data;}, 
      err => {alert("Unable to get list of tasks");}
    )
  }

  call(task:Task){
    this.taskObj = task;
    this.editTaskValue = task.task
  }

}
