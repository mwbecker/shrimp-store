import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShrimpsComponent } from './shrimps/shrimp.component';
import { ShrimpDetailComponent } from './shrimp-detail/shrimp-detail.component';
import { SecretComponent } from './secret/secret.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ShrimpDetailComponent },
  { path: 'shrimps', component: ShrimpsComponent },
  { path: 'secret', component: SecretComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}