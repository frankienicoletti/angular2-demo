import {Component} from 'angular2/core';
// import {Task} from '../models/task';

@Component({
  selector: 'my-app',
  template:`
    <div class="row">
      <div class="col s4">
        <h3 class="center-align">Todo</h3>
        <input #add (keyup.enter)="addTask(add.value); add.value=''" placeholder="New task"/>
        <button class="waves-effect waves-light btn" (click)="addTask(add.value); add.value=''">ADD</button>
        <button class="waves-effect waves-light btn" (click)="add.value=''">CLEAR</button>
        <ul class="collection">
          <li *ngFor="#task of tasks, #i=index" (click)="completeTask(i)" class="collection-item">
            <i class="material-icons prefix">done</i><span>{{task}}</span>
          </li>
          <li *ngIf="tasks.length === 0" class="collection-item center-align">No tasks here!</li>
        </ul>
      </div>
    </div>
  `,
})
export class AppComponent {
  public tasks:string[] = [ "Netflix", "Chill" ];

  addTask(task) {
    this.tasks.push(task);
  }

  completeTask(index) {
    this.tasks.splice(index, 1);
  }

}
