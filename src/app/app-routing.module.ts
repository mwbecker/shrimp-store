import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShrimpsComponent } from './shrimps/shrimp.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { ShrimpDetailComponent } from './shrimp-detail/shrimp-detail.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ShrimpDetailComponent },
  { path: 'shrimps', component: ShrimpsComponent, canActivate: [AuthGuard]},
  { path: 'storefront', component: StorefrontComponent},
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}