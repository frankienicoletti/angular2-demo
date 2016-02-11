import {Component} from 'angular2/core';
import {TaskService} from '../services/task.service'

@Component({
  selector: 'add-task',
  template:`
    <input #add (keyup.enter)="addTask(add.value); add.value=''" placeholder="New task"/>
    <button class="waves-effect waves-light btn" (click)="addTask(add.value); add.value=''">ADD</button>
    <button class="waves-effect waves-light btn" (click)="add.value=''">CLEAR</button>
  `,
  providers: [TaskService]
})

export class AddComponent {
  task: string;

  constructor(private _taskService: TaskService) { }

  addTask(task) {
    this._taskService.addTask(task);
  }

  completeTask(index) {
    this._taskService.completeTask(index);
  }

}
