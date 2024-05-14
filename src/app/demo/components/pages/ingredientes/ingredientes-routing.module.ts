import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IngredientesComponent } from './ingredientes.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: IngredientesComponent }
	])],
	exports: [RouterModule]
})
export class IngredientesRoutingModule { }
