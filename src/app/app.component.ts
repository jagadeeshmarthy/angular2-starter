import { Component } from '@angular/core';
import { tasks } from './mock-tasks';
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
	<li  *ngFor="let list of lists">
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
	title = 'Angular4';
	task:Task;
	//task1:Task = ''
	lists: Task[] = tasks;
	postTask(): void {
		this.lists.push(this.task);
		this.task= ' '
	}
	deleteTask(list: Task): void {
		const index = this.lists.indexOf(list);
		this.lists.splice(index, 1);
	}
}

