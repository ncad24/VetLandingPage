import { Routes } from '@angular/router';
import {LandingOneComponent} from './component/landing-one/landing-one.component';
import {LandingTwoComponent} from './component/landing-two/landing-two.component';

export const routes: Routes = [
  {path:'', component: LandingOneComponent},
  {path:'landingOne', component: LandingOneComponent},
  {path:'landingTwo', component: LandingTwoComponent},
];
