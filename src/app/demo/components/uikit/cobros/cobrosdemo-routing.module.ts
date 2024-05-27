import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CobrosDemoComponent } from './cobrosdemo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: CobrosDemoComponent }
	])],
	exports: [RouterModule]
	
})
export class CobrosDemoRoutingModule { }
