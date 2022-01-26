import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { SharedModule } from '../../../../src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { SupplierlistComponent } from './supplierlist/supplierlist.component';
import { SupplierdRoutingModule } from './supplier-route.routing';

@NgModule({
  imports: [
    CommonModule,
    SupplierdRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDropzoneModule,
    Ng2OrderModule,
    NgxSpinnerModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  declarations: [SupplierComponent,SupplierlistComponent],
  providers:[NgxSpinnerService]
})
export class SupplierModule { }
