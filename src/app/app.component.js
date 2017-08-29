"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_tasks_1 = require("./mock-tasks");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular4';
        //task1:Task = ''
        this.lists = mock_tasks_1.tasks;
    }
    AppComponent.prototype.postTask = function () {
        this.lists.push(this.task);
        this.task = ' ';
    };
    AppComponent.prototype.deleteTask = function (list) {
        var index = this.lists.indexOf(list);
        this.lists.splice(index, 1);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t<h1>Weclome to {{title}} </h1>\n\t<br>\n\t<input  [(ngModel)]=\"task\" placeholder=\"Enter Todo\" />\n\t<button (click)=\"postTask()\">Add</button>\n\t<ul>\n\t<li  *ngFor=\"let list of lists\">\n\t<label class=\"route\" >{{list}}&nbsp;<button (click)=deleteTask(list)>x</button> </label>\n\t</li>\n\t</ul>\n\t",
        styles: ['li { list-style-type : none; margin-bottom:10px;}',
            '.route { cursor: pointer; }']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map