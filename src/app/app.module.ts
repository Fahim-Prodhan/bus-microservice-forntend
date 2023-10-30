import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule , HttpClientJsonpModule} from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatDividerModule} from '@angular/material/divider';
import { AdminRouterOutletComponent } from './admin/admin-router-outlet/admin-router-outlet.component';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { ViewBusComponent } from './admin/bus/view-bus/view-bus.component';
import { AddBusComponent } from './admin/bus/add-bus/add-bus.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateBusComponent } from './admin/bus/update-bus/update-bus.component';
import { AddScheduleComponent } from './admin/bus-schedule/add-schedule/add-schedule.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ViewScheduleComponent } from './admin/bus-schedule/view-schedule/view-schedule.component';
import { UpdateScheduleComponent } from './admin/bus-schedule/update-schedule/update-schedule.component';
import {MatSelectModule} from '@angular/material/select';
import { ViewSeatComponent } from './admin/seat/view-seat/view-seat.component';
import { AddRouteComponent } from './admin/routes/add-route/add-route.component';
import { AddCustomerComponent } from './admin/customer/add-customer/add-customer.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TicketComponent } from './components/ticket/ticket.component';
import { ViewCustomersComponent } from './admin/customer/view-customers/view-customers.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewRouteComponent } from './admin/routes/view-route/view-route.component';
import { SchdulePipe } from './search-filter/schdule.pipe';
import { CustomerFilterPipe } from './search-filter/customer-filter.pipe';
import { SellerRouterOutletComponent } from './seller/seller-router-outlet/seller-router-outlet.component';
import { AddSellerComponent } from './admin/add-seller/add-seller.component';
import { SideBarSellerComponent } from './seller/side-bar-seller/side-bar-seller.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { SellerBusListComponent } from './seller/seller-bus-list/seller-bus-list.component';
import { SellerScheduleListComponent } from './seller/seller-schedule-list/seller-schedule-list.component';
import { SellerCustomerListComponent } from './seller/seller-customer-list/seller-customer-list.component';
import { SellerRoutesComponent } from './seller/seller-routes/seller-routes.component';
import { SellerSeatListComponent } from './seller/seller-seat-list/seller-seat-list.component';
import { SellerAddCustomerComponent } from './seller/seller-add-customer/seller-add-customer.component';
import { SellerTicketComponent } from './seller/seller-ticket/seller-ticket.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import { SellerViewUsersComponent } from './seller/seller-view-users/seller-view-users.component';
import { UserSearchPipe } from './search-filter/user-search.pipe';
import { NormalRouterOutletComponent } from './normal-user/normal-router-outlet/normal-router-outlet.component';
import { SidebarNormalComponent } from './normal-user/sidebar-normal/sidebar-normal.component';
import { NormalDashboardComponent } from './normal-user/normal-dashboard/normal-dashboard.component';
import { NormalRoutesComponent } from './normal-user/normal-routes/normal-routes.component';
import { NormalSeatsComponent } from './normal-user/normal-seats/normal-seats.component';
import { NormalSchedulesComponent } from './normal-user/normal-schedules/normal-schedules.component';
import { BookTicketComponent } from './normal-user/book-ticket/book-ticket.component';
import { NormalTicketComponent } from './normal-user/normal-ticket/normal-ticket.component';
import { ViewAllTicketsComponent } from './normal-user/view-all-tickets/view-all-tickets.component';
import { RoutesSearchComponent } from './normal-user/routes-search/routes-search.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { RouteSearchSellerComponent } from './seller/route-search-seller/route-search-seller.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { RemoveDublicatePipe } from './search-filter/remove-dublicate.pipe';
import { SearchByDateComponent } from './normal-user/search-by-date/search-by-date.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    AdminDashboardComponent, 
    ContactComponent,
    AboutComponent,
    SidebarComponent,
    AdminRouterOutletComponent,
    ServicePageComponent,
    ViewBusComponent,
    AddBusComponent,
    UpdateBusComponent,
    AddScheduleComponent,
    ViewScheduleComponent,
    UpdateScheduleComponent,
    ViewSeatComponent,
    AddRouteComponent,
    AddCustomerComponent,
    TicketComponent,
    ViewCustomersComponent,
    AddAdminComponent,
   
    ViewRouteComponent,
    SchdulePipe,
    CustomerFilterPipe,
    SellerRouterOutletComponent,
    AddSellerComponent,
    SideBarSellerComponent,
    SellerDashboardComponent,
    SellerBusListComponent,
    SellerScheduleListComponent,
    SellerCustomerListComponent,
    SellerRoutesComponent,
    SellerSeatListComponent,
    SellerAddCustomerComponent,
    SellerTicketComponent,
    ViewUserComponent,
    SellerViewUsersComponent,
    UserSearchPipe,
    NormalRouterOutletComponent,
    SidebarNormalComponent,
    NormalDashboardComponent,
    NormalRoutesComponent,
    NormalSeatsComponent,
    NormalSchedulesComponent,
    BookTicketComponent,
    NormalTicketComponent,
    ViewAllTicketsComponent,
    RoutesSearchComponent,
    RouteSearchSellerComponent,
    RemoveDublicatePipe,
    SearchByDateComponent,
   
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,  
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    Ng2SearchPipeModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    })

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
