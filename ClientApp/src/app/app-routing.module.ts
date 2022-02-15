import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { BasicLoginComponent } from './pages/auth/login/basic-login/basic-login.component';
import { PosOrderComponent } from './pages/Orders/PosOrder/PosOrder.component';
import { InvoiceComponent } from './pages/Pos/Invoice/Invoice.component';
import { MainPosComponent } from './pages/Pos/MainPos/MainPos.component';
import { PosComponent } from './pages/Pos/Pos.component';
import { AllInventoryComponent } from './pages/Products/AllInventory/AllInventory.component';
import { ProductsModule } from './pages/Products/Products.module';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        
      }, {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule),
         //canActivate: [AuthGuard]
      },
      //  {
      //   path: 'basic',
      //   loadChildren: () => import('./pages/ui-elements/basic/basic.module').then(m => m.BasicModule),
      //   canActivate: [AuthGuard]
      // }, {
      //   path: 'notifications',
      //   loadChildren: () => import('./pages/ui-elements/advance/notifications/notifications.module').then(m => m.NotificationsModule),
      //   canActivate: [AuthGuard]
      // }, {
      //   path: 'bootstrap-table',
      //   loadChildren: () => import('./pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module')
      //   .then(m => m.BasicBootstrapModule),
      //   canActivate: [AuthGuard]
      // }, {
      //   path: 'map',
      //   loadChildren: () => import('./pages/map/google-map/google-map.module').then(m => m.GoogleMapModule),
      //   canActivate: [AuthGuard]
      // }, 
      {
        path: 'supplier',
        loadChildren: () => import('./pages/supplier/supplier.module').then(m => m.SupplierModule),
       // canActivate: [AuthGuard]
        
       },
      {
        path: 'user',
        loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule),
       // canActivate: [AuthGuard]
        
       },
       // {
      //   path: 'simple-page',
      //   loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule),
      //   canActivate: [AuthGuard]
      // },
      {
        path: 'products',
        loadChildren: () => import('./pages/Products/Products.module').then(m => m.ProductsModule),
       // canActivate: [AuthGuard]
     
      },
      {
        path: 'allproducts', redirectTo: 'products/allproducts', pathMatch: 'full',
       // canActivate: [AuthGuard]
      },
      {
        path: 'allCategories',
        loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule)
        // ,canActivate: [AuthGuard]
     
      },

      // {
      //   path: 'allBrands',
      //   loadChildren: () => import('./pages/Brands/Brands.module').then(m => m.BrandsModule)
     
      // },

      {
        path: 'allorders',
        loadChildren: () => import('./pages/Orders/Orders.module').then(m => m.OrdersModule)
     
      },
      {  path: 'posorders', redirectTo: '/allorders/posorders', pathMatch: 'full'},
      {  path: 'messages', redirectTo: '/allorders/messages', pathMatch: 'full'},
    
    {
        path: 'allvendors',
        loadChildren: () => import('./pages/Vendors/Vendors.module').then(m => m.VendorsModule)
     
      },
      // {
      //   path: 'venderDetails', redirectTo: '/allvendors/venderDetails/11', pathMatch: 'full'
     
      // },
    
      {
        path: 'inventory', redirectTo: 'products/inventory', pathMatch: 'full'
     
     
      },
       
      {
        path: 'addinventory', redirectTo: 'products/addinventory', pathMatch: 'full'
     
     
      }
      // , {
      //   path: 'banner',
      //   loadChildren: () => import('./pages/Banner/Banner.module').then(m => m.BannerModule)
     
      // },
      
      // {
      //   path: 'addsalesman',
      //   loadChildren: () => import('./pages/Salesman/Salesman.module').then(m => m.SalesmanModule)
     
      // },
    
   
    ]
  },
  {
    path: 'pos',
    component: MainPosComponent
    // ,
    // canActivate: [AuthGuard]
  },
  {
    path: 'invoice',
    component: InvoiceComponent,canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
