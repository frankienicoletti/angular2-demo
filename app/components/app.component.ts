import {Component} from 'angular2/core';
import {TaskService} from '../services/task.service';
import {AddComponent} from './add.component'
import {ListComponent} from './list.component'

@Component({
  selector: 'todo-app',
  template:`
    <div class="row">
      <div class="col s4">
        <h3 class="center-align">Todo List</h3>
        <add-task></add-task>
        <task-list></task-list>
      </div>
    </div>
  `,
  directives: [AddComponent, ListComponent],
  providers: [TaskService]
})

export class AppComponent  {
}
