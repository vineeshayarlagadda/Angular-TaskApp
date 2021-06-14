import { Component, OnInit } from '@angular/core';

interface taskDetails{
  taskName : string,
  taskPriority : number,
  taskStatus : string
}

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  taskdetails:taskDetails[]=[];
  userinput = {} as taskDetails;
  doAddorUpdateTask(name : string,taskpriority : string){
    let isPresent = false;

    for(let i = 0;i<this.taskdetails.length;i++)
    {
      if(this.taskdetails[i].taskName == name)
      {
        isPresent = true;
        this.taskdetails[i].taskPriority = parseInt(taskpriority);
        break;
      }
    }

    if(!isPresent)
    {
      let priority:number = parseInt(taskpriority);
      let tempTask:taskDetails={
        taskName:name,
        taskPriority:priority,
        taskStatus:"pending"
      };
      this.taskdetails.push(tempTask);
    }
  }

  getAllTasks() : taskDetails[]{
    return this.taskdetails;
  }
  
  doChangeStatus(status:string, name:string){
    this.taskdetails.forEach(task=>{
      if(task.taskName.localeCompare(name)==0){
        task.taskStatus=status;
      }
    })
   }

}
