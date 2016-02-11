import {Component, OnInit} from 'angular2/core';
import {TaskService} from '../services/task.service'

@Component({
  selector: 'task-list',
  template:`
  <ul class="collection">
    <li *ngFor="#task of tasks, #i=index" (click)="completeTask(i)" class="collection-item">
      <span>{{task}}</span>
    </li>
  </ul>
  `,
  providers: [TaskService]
})

export class ListComponent implements OnInit {
  tasks: string[];

  constructor(private _taskService: TaskService) { }

  getTasks() {
    this._taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  completeTask(index) {
    this._taskService.completeTask(index);
  }

  ngOnInit() {
    this.getTasks();
  }

}
