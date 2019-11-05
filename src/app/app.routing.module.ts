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

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'description', component: ServeItemsComponent},
  { path: 'workhours', component: WorkHoursComponent},
  { path: 'vip_apply', component: VipCardComponent},
  { path: 'reservations', component: ReservationsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'sidenav', component: SidenavComponent},
  { path: 'description/deeptissue-tab', component: ServeItemsComponent},
  { path: 'description/swedish-tab', component: ServeItemsComponent},
  { path: 'description/hotstone-tab', component: ServeItemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
