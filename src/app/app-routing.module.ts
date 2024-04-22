import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'', component:HomeComponent,title:'home'},
  {path:'about' , component:AboutComponent,title:'about'},
  {path:'portfolio', component:PortfolioComponent,title:'portfolio'},
  {path:'contact', component:ContactComponent,title:'contact'},
  {path:'**', component:NotfoundComponent, title:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
