import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { CabinsComponent } from './components/cabins/cabins.component';
import { LocationComponent } from './components/location/location.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ErrorComponent } from './components/error/error.component';
import { ThingsToDoComponent } from './components/things-to-do/things-to-do.component';



const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cabins', component: CabinsComponent },
  { path: 'thingsToDo', component: ThingsToDoComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
