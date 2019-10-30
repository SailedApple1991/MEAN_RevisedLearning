import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatTabsModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AppComponent } from './app.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent} from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RowNavComponent } from './nav/row-nav/row-nav.component';
import { TailComponent } from './tail/tail.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { MainCardComponent } from './card/main-card/main-card.component';
import { from } from 'rxjs';
import { ServeItemsComponent } from './tabs/serve-items/serve-items.component';
import { AppRoutingModule } from './app.routing.module';
import { WorkHoursComponent } from './card/work-hours/work-hours.component';
import { VipCardComponent } from './card/vip-card/vip-card.component';
import { ReservationsComponent } from './card/reservations/reservations.component';
import { AboutComponent } from './card/about/about.component';
import { AgmCoreModule } from '@agm/core';
import { MainPageComponent } from './main/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    RowNavComponent,
    TailComponent,
    SidenavComponent,
    MainCardComponent,
    ServeItemsComponent,
    WorkHoursComponent,
    VipCardComponent,
    ReservationsComponent,
    AboutComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCarouselModule,
    FlexLayoutModule,
    MatTabsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6EHvmpMAYLP6PQ2t6v4l04GXzNeYrQho'
    })
  ],
  exports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCarouselModule,
    FlexLayoutModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
