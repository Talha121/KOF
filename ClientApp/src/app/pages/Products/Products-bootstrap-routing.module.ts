import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInventoryComponent } from './AddInventory/AddInventory.component';
import { AllInventoryComponent } from './AllInventory/AllInventory.component';
import { AllProductComponent } from './AllProduct/AllProduct.component';

import { ProductsComponent } from './Products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    data: {
      breadcrumb: 'Add-Products',
      icon: 'fa fa-product-hunt bg-c-blue',
      breadcrumb_caption: 'Add your products with basic Details',
      status: true
    }
  },
  {
    path: 'allproducts',
    component: AllProductComponent,
    data: {
      breadcrumb: 'Products',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'All Products with Details',
      status: true
    }
  },
  {
    path: 'inventory',
    component: AllInventoryComponent,
    data: {
      breadcrumb: 'Inventory',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Inventory With All Products And Details',
      status: true
    }
  },
  {
    path: 'addinventory',
    component: AddInventoryComponent,
    data: {
      breadcrumb: 'Add Inventory',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Inventory Detail ',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
