System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // import {Task} from '../models/task';
            AppComponent = (function () {
                function AppComponent() {
                    this.tasks = ["Netflix", "Chill"];
                }
                AppComponent.prototype.addTask = function (task) {
                    this.tasks.push(task);
                };
                AppComponent.prototype.completeTask = function (index) {
                    this.tasks.splice(index, 1);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"row\">\n      <div class=\"col s4\">\n        <h3 class=\"center-align\">Todo</h3>\n        <input #add (keyup.enter)=\"addTask(add.value); add.value=''\" placeholder=\"New task\"/>\n        <button class=\"waves-effect waves-light btn\" (click)=\"addTask(add.value); add.value=''\">ADD</button>\n        <button class=\"waves-effect waves-light btn\" (click)=\"add.value=''\">CLEAR</button>\n        <ul class=\"collection\">\n          <li *ngFor=\"#task of tasks, #i=index\" (click)=\"completeTask(i)\" class=\"collection-item\">\n            <i class=\"material-icons prefix\">done</i><span>{{task}}</span>\n          </li>\n          <li *ngIf=\"tasks.length === 0\" class=\"collection-item center-align\">No tasks here!</li>\n        </ul>\n      </div>\n    </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map