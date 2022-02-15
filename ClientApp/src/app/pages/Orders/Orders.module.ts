import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './Orders.component';
import { AllOrdersComponent } from './AllOrders/AllOrders.component';
import { OrderStatusComponent } from './OrderStatus/OrderStatus.component';
import { OrderRoutingModule } from './OrderRouting.routing';
import { SharedModule } from '../../../../src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { PosOrderComponent } from './PosOrder/PosOrder.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDropzoneModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxSpinnerModule,
  ],
  declarations: [ContactusComponent,OrdersComponent,AllOrdersComponent,OrderStatusComponent,PosOrderComponent],
  providers: [
    NgxSpinnerService
    ]
})
export class OrdersModule { }
