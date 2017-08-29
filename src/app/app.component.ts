import { Component } from '@angular/core';
//import { tasks } from './mock-tasks';
import { Task } from './task'
import { Location }                 from '@angular/common';

@Component({
	selector: 'my-app',
	template: `
	<h1>Weclome to {{title}} </h1>
	<br>
	<input  [(ngModel)]="task" placeholder="Enter Todo" />
	<button (click)="postTask()">Add</button>
	<ul>
	<li  *ngFor="let list of tasks">
	<label class="route" >{{list}}&nbsp;<button (click)=deleteTask(list)>x</button> </label>
	</li>
	</ul>
	`,
	styles: 
	['li { list-style-type : none; margin-bottom:10px;}',
	'.route { cursor: pointer; }']
	
	})

//  &nbsp;<button (click)=deleteTask(list)>x</button>

export class AppComponent {
	tasks: string[] = ['Task1','Task2','Task3','Task4'];
	title = 'Angular4';
	task: string = ''
	//lists: Task[] = tasks;
	postTask(): void {
		this.tasks.push(this.task);
		this.task= ' '
	}
	deleteTask(list: string): void {
		const index = this.tasks.indexOf(list);
		this.tasks.splice(index, 1);
	}
}

