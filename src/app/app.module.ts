import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {IvyCarouselModule} from 'angular-responsive-carousel2';
import { ToolsComponent } from './components/tools/tools.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { RarityComponent } from './components/rarity/rarity.component';
import { FilterComponent } from './components/filter/filter.component';
import { DetailsComponent } from './components/rarity/details/details.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ToolsComponent,
    CollectionsComponent,
    RarityComponent,
    FilterComponent,
    DetailsComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
