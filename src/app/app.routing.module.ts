import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { ServeItemsComponent } from './tabs/serve-items/serve-items.component';
import { AppComponent } from './app.component';
import { MainCardComponent } from './card/main-card/main-card.component';


const routes: Routes = [
  { path:'', component: MainCardComponent},
  { path: 'description', component: ServeItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
