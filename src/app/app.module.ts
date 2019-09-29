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
import { SidenavComponent } from './nav/side-nav/sidenav.component';
import { MainCardComponent } from './card/main-card/main-card.component';
import { from } from 'rxjs';
import { ServeItemsComponent } from './tabs/serve-items/serve-items.component';
import { AppRoutingModule } from './app.routing.module';
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
    AppRoutingModule
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
