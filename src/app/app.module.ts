import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LocationsComponent } from './locations/locations.component';
import { MapComponent } from './map/map.component';
import { RecentComponent } from './recent/recent.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'map', component: MapComponent },
  { path: 'recent', component: RecentComponent },
  { path: '**', redirectTo: ''}
]
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LocationsComponent,
    MapComponent,
    RecentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
