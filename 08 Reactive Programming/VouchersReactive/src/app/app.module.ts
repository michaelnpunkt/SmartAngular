import { HttpModule } from '@angular/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MatchHeightDirective } from './shared/match-height/match-height.directive';
import { AccountsComponent } from './accounts/accounts.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { VoucherDetailComponent } from './vouchers/voucher/voucher-detail/voucher-detail.component';
import { VoucherDetailsListComponent } from './vouchers/voucher/voucher-details-list/voucher-details-list.component';
import { VouchersService } from './vouchers/voucher.service';
import { ObservablesComponent } from './demos/observables/observables.component';
import { DeepNestingComponent } from './demos/deep-nesting/deep-nesting.component';
import { RouteGuard } from './route.guard.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { HTTP_INTERCEPTORS }from '@angular/common/http';
import { ObservableCrudComponent } from './demos/observable-crud/observable-crud.component';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { MediaService } from './demos/observables/media.service';
import { MediaItemComponent } from './demos/observables/media-item/media-item.component';
registerLocaleData(localeDe)

@NgModule({
  declarations: [
    AppComponent,    
    VouchersListComponent,
    AccountsComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    DemosComponent, 
    ObservablesComponent,
    NavbarComponent,
    MatchHeightDirective,
    AdminComponent,
    DeepNestingComponent,
    ObservableCrudComponent,
    MediaItemComponent
  ],
  imports: [
    FormsModule,
    HttpModule,    
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    VouchersService,
    MediaService,   
    {provide: LOCALE_ID, useValue: "de-DE"},  
    // {provide: HTTP_INTERCEPTORS, useClass: FirebaseInterceptor, multi: true},  
    RouteGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
