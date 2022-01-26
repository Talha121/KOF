import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './Products.component';
import { AddProductComponent } from './Add-Product/Add-Product.component';
import { SharedModule } from './../../shared/shared.module';
import { ProductsRoutingModule } from './Products-bootstrap-routing.module';
import { AllProductComponent } from './AllProduct/AllProduct.component';
import * as Material from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Supplier } from './../../Models/Supplier.model';
import { HttpClientModule } from '@angular/common/http';
import { SupplierService } from './../../_service/supplier.service';
import { Product } from './../../Models/Product.Model';
import { NgxDropzoneModule } from 'ngx-dropzone';
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import{Ng2OrderModule} from 'ng2-order-pipe';
import{NgxPaginationModule} from 'ngx-pagination';
import { AllInventoryComponent } from './AllInventory/AllInventory.component';
import { StockinService } from './../../../../src/app/_service/stockin.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { AddInventoryComponent } from './AddInventory/AddInventory.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDropzoneModule,
    Material.MatStepperModule,
		Material.MatGridListModule, // for grid column
        Material.MatFormFieldModule, //form
        Material.MatInputModule, //input
        Material.MatRadioModule, //mat-radio-group - radio button
        Material.MatDatepickerModule, //matDatepicker - datepicker
        Material.MatNativeDateModule, //required for datepicker
        Material.MatSelectModule, //mat-select - dropdown
        Material.MatCheckboxModule, //mat-checkbox - checkbox
		Material.MatButtonModule,
		Material.MatTableModule,
		Material.MatIconModule,
		Material.MatPaginatorModule,
		Material.MatSortModule,
		Material.MatProgressBarModule,
		Material.MatCardModule, 
		Material. MatIconModule, 
    Material. MatToolbarModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxSpinnerModule,
  ],
  declarations: [ProductsComponent,
  AddProductComponent,
AllProductComponent,
AllInventoryComponent,AddInventoryComponent],
providers: [
Supplier,SupplierService,Product,StockinService,NgxSpinnerService
]
})
export class ProductsModule { }
