import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { adminGuard } from './serviceOfGuard/admin.guard';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminRouterOutletComponent } from './admin/admin-router-outlet/admin-router-outlet.component';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { loginGuard } from './serviceOfGuard/login.guard';
import { ViewBusComponent } from './admin/bus/view-bus/view-bus.component';
import { AddBusComponent } from './admin/bus/add-bus/add-bus.component';
import { AddScheduleComponent } from './admin/bus-schedule/add-schedule/add-schedule.component';
import { ViewScheduleComponent } from './admin/bus-schedule/view-schedule/view-schedule.component';
import { ViewSeatComponent } from './admin/seat/view-seat/view-seat.component';
import { AddCustomerComponent } from './admin/customer/add-customer/add-customer.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ViewCustomersComponent } from './admin/customer/view-customers/view-customers.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { ViewRouteComponent } from './admin/routes/view-route/view-route.component';
import { AddSellerComponent } from './admin/add-seller/add-seller.component';
import { SellerRouterOutletComponent } from './seller/seller-router-outlet/seller-router-outlet.component';
import { sellerGuard } from './serviceOfGuard/seller.guard';
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
import { NormalRouterOutletComponent } from './normal-user/normal-router-outlet/normal-router-outlet.component';
import { normalGuard } from './serviceOfGuard/normal.guard';
import { NormalDashboardComponent } from './normal-user/normal-dashboard/normal-dashboard.component';
import { NormalRoutesComponent } from './normal-user/normal-routes/normal-routes.component';
import { NormalSeatsComponent } from './normal-user/normal-seats/normal-seats.component';
import { NormalSchedulesComponent } from './normal-user/normal-schedules/normal-schedules.component';
import { BookTicketComponent } from './normal-user/book-ticket/book-ticket.component';
import { NormalTicketComponent } from './normal-user/normal-ticket/normal-ticket.component';
import { ViewAllTicketsComponent } from './normal-user/view-all-tickets/view-all-tickets.component';
import { RoutesSearchComponent } from './normal-user/routes-search/routes-search.component';
import { RouteSearchSellerComponent } from './seller/route-search-seller/route-search-seller.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
    canActivate:[loginGuard]
  },
  {
    path:'signup',
    component:RegisterComponent,
    pathMatch:'full',
    canActivate:[loginGuard]
  },
  {
    path:"services",
    component:ServicePageComponent,
    pathMatch:"full"
  },
  {
    path:"about",
    component:AboutComponent,
    pathMatch:"full"
  },
  {
    path:'contact',
    component:ContactComponent,
    pathMatch:'full'
  },
  {
    path:'normal/search-routes',
    component:RoutesSearchComponent,
    pathMatch:'full'
  },
  {
    path:'seller/search-routes',
    component:RouteSearchSellerComponent,
    pathMatch:"full"
  },
  {
    path:'admin',
    component:AdminRouterOutletComponent,
    canActivate:[adminGuard],
    children:[
      {
        path:'add-admin',
        component:AddAdminComponent
      },
      {
          path:'add-seller',
          component:AddSellerComponent
      }
      ,{
        path:'admin-dashboard',
        component:AdminDashboardComponent,

      },
      {
        path:'bus',
        component:ViewBusComponent
      },
      {
        path:'schedule/:busId',
        component:AddScheduleComponent
      },
      {
        path:'schedule',
        component:ViewScheduleComponent
      },
      {
        path:'schedule/seat/:scheduleId',
        component:ViewSeatComponent
      },
      {
        path:':scheduleId/add-customer/:seatId',
        component:AddCustomerComponent
      },
      {
        path:'customer/:customerId/ticket',
        component:TicketComponent
      },
      {
        path:'customer',
        component:ViewCustomersComponent
      },
      {
        path:'routes',
        component:ViewRouteComponent
      },
      {
        path:'all-users',
        component:ViewUserComponent,
      }
    ]
    
  },
  {
    path:'normal',
    component:NormalRouterOutletComponent,
    canActivate:[normalGuard],
    children:[
      {
        path:'normal-dashboard',
        component:NormalDashboardComponent
      },
      {
        path:'schedule',
        component:NormalSchedulesComponent,
      },
      {
        path:'bus',
        component:SellerBusListComponent
      },
      {
        path:'tickets',
        component:ViewAllTicketsComponent
      },
      {
        path:'schedule/seat/:scheduleId',
        component:NormalSeatsComponent
      },
      {
        path:':scheduleId/add-customer/:seatId',
        component:BookTicketComponent
      },
      {
        path:'customer/:customerId/ticket',
        component:NormalTicketComponent
      },
      {
        path:'routes',
        component:NormalRoutesComponent
      }
    ]
  },
  {
    path:'seller',
    component:SellerRouterOutletComponent,
    canActivate:[sellerGuard],
    children:[
      {
        path:'seller-dashboard',
        component:SellerDashboardComponent
      },
      {
        path:'bus',
        component:SellerBusListComponent
      },
      {
        path:'schedule',
        component:SellerScheduleListComponent
      },
      {
        path:'customer',
        component:SellerCustomerListComponent
      },
      {
        path:'routes',
        component:SellerRoutesComponent
      },
      {
        path:'schedule/seat/:scheduleId',
        component:SellerSeatListComponent
      },
      {
        path:':scheduleId/add-customer/:seatId',
        component:SellerAddCustomerComponent
      },
      {
        path:'customer/:customerId/ticket',
        component:SellerTicketComponent
      },
      {
        path:'all-users',
        component:SellerViewUsersComponent
      }

    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
