import {Tasks} from '../mocks/start-tasks';
import {Injectable} from 'angular2/core';

@Injectable()

export class TaskService {
  getTasks() {
    return Promise.resolve(Tasks);
  }

  addTask(task) {
    Tasks.push(task);
  }

  completeTask(index) {
    Tasks.splice(index, 1);
  }
}
