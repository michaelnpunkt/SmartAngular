import { ObservablesComponent } from './demos/observables/observables.component';
import { DemosComponent } from './demos/demos.component';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, ViewChild } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { RouteGuard } from './route.guard.service';
import { DeepNestingComponent } from './demos/deep-nesting/deep-nesting.component';
import { ObservableCrudComponent } from './demos/observable-crud/observable-crud.component';

const appRoutes: Routes = [
    { path: '',
      component: DemosComponent,
      children: [
        { path: 'observables', component: ObservablesComponent },
        { path: 'observablescurd', component: ObservableCrudComponent },        
        { path: 'deepnesting', component: DeepNestingComponent }
      ]
    },
    { path: 'vouchers',
      component: VouchersListComponent
    },
    { path: 'vouchers/:id',
      component: VoucherComponent
    },
    { path: 'accounts',
      component: AccountsComponent,
      data: { title: 'Accounts' }
    },
    {
      path: 'admin',
      component: AdminComponent ,
      data: { title: 'The protected Admin Page' },
      canActivate: [RouteGuard]
    },    
  ];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes, { enableTracing: false})],
 exports: [RouterModule]
})
export class AppRoutingModule {

}