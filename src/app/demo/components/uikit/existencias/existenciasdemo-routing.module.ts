import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExistenciasDemoComponent } from './existenciasdemo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ExistenciasDemoComponent }
	])],
	exports: [RouterModule]
	
})
export class ExistenciasDemoRoutingModule { }
