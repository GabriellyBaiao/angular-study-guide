import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ModuleWithProviders, NgModule } from "@angular/core";

const APP_ROUTES: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

// exports const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}