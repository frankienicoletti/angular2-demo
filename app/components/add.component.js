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
    var AddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            }],
        execute: function() {
            AddComponent = (function () {
                function AddComponent(_taskService) {
                    this._taskService = _taskService;
                }
                AddComponent.prototype.addTask = function (task) {
                    this._taskService.addTask(task);
                };
                AddComponent.prototype.completeTask = function (index) {
                    this._taskService.completeTask(index);
                };
                AddComponent = __decorate([
                    core_1.Component({
                        selector: 'add-task',
                        template: "\n    <input #add (keyup.enter)=\"addTask(add.value); add.value=''\" placeholder=\"New task\"/>\n    <button class=\"waves-effect waves-light btn\" (click)=\"addTask(add.value); add.value=''\">ADD</button>\n    <button class=\"waves-effect waves-light btn\" (click)=\"add.value=''\">CLEAR</button>\n  ",
                        providers: [task_service_1.TaskService]
                    }), 
                    __metadata('design:paramtypes', [task_service_1.TaskService])
                ], AddComponent);
                return AddComponent;
            })();
            exports_1("AddComponent", AddComponent);
        }
    }
});
//# sourceMappingURL=add.component.js.map