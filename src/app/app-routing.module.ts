import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToolsComponent } from './components/tools/tools.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { RarityComponent } from './components/rarity/rarity.component';
import { DetailsComponent } from './components/rarity/details/details.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'tools', component: ToolsComponent},
  {path: 'collections', component: CollectionsComponent},
 // {path: 'rarity', component: RarityComponent},
  {path: 'details', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
