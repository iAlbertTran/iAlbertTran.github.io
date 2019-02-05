import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ConnectComponent } from './connect/connect.component';
import { HelperService } from './service/helper.service';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

const appRoutes: Routes = [
  { path: 'Home',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Connect', component: ConnectComponent},
  { path: 'Portfolio', component: ProjectsComponent}
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ConnectComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
