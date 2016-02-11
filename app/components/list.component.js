System.register(['angular2/core', '../services/task.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, task_service_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(_taskService) {
                    this._taskService = _taskService;
                }
                ListComponent.prototype.getTasks = function () {
                    var _this = this;
                    this._taskService.getTasks().then(function (tasks) { return _this.tasks = tasks; });
                };
                ListComponent.prototype.completeTask = function (index) {
                    this._taskService.completeTask(index);
                };
                ListComponent.prototype.ngOnInit = function () {
                    this.getTasks();
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'task-list',
                        template: "\n  <ul class=\"collection\">\n    <li *ngFor=\"#task of tasks, #i=index\" (click)=\"completeTask(i)\" class=\"collection-item\">\n      <span>{{task}}</span>\n    </li>\n  </ul>\n  ",
                        providers: [task_service_1.TaskService]
                    }), 
                    __metadata('design:paramtypes', [task_service_1.TaskService])
                ], ListComponent);
                return ListComponent;
            })();
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map