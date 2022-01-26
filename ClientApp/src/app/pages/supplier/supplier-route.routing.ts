import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierlistComponent } from './supplierlist/supplierlist.component';


const routes: Routes = [
  {
    path: '',
    component: SupplierlistComponent,
    data: {
      breadcrumb: 'Suppliers',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'All Suppliers Detail',
      status: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierdRoutingModule { }
