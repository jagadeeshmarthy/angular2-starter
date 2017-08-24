import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component'

const routes: Routes = [{
	path: 'task',
	component: TaskComponent
	}, {
	path: '',
	component: AppComponent
	}]

@NgModule({
	imports: [BrowserModule,
				FormsModule,
				RouterModule.forRoot(routes)],
	declarations: [AppComponent, TaskComponent],
	bootstrap: [AppComponent]
	}) 

export class AppModule {}