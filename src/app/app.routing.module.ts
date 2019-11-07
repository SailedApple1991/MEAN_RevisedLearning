import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { ServeItemsComponent } from './tabs/serve-items/serve-items.component';
import { AppComponent } from './app.component';
import { MainCardComponent } from './card/main-card/main-card.component';
import { WorkHoursComponent } from './card/work-hours/work-hours.component';
import { VipCardComponent } from './card/vip-card/vip-card.component';
import { ReservationsComponent } from './card/reservations/reservations.component';
import { AboutComponent } from './card/about/about.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { ServeItems1Component } from './tabs/serve-items1/serve-items1.component';
import { ServeItems2Component } from './tabs/serve-items2/serve-items2.component';
import { ServeItems3Component } from './tabs/serve-items3/serve-items3.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  // { path: 'description', component: ServeItemsComponent},
  { path: 'description', component: ServeItemsComponent,
    children: [
      {
        path : '',
        pathMatch: 'full',
        redirectTo: 'deeptissue-tab'
      },
      {
        path : 'deeptissue-tab',
        component: ServeItems1Component
      },
      {
        path : 'swedish-tab',
        component: ServeItems2Component
      },
      {
        path : 'hotstone-tab',
        component: ServeItems3Component
      },
    ]},
  { path: 'workhours', component: WorkHoursComponent},
  { path: 'vip_apply', component: VipCardComponent},
  { path: 'reservations', component: ReservationsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'sidenav', component: SidenavComponent},
  // { path: 'description/deeptissue-tab', component: ServeItemsComponent},
  // { path: '/swedish-tab', component: ServeItemsComponent},
  // { path: 'description/hotstone-tab', component: ServeItemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
