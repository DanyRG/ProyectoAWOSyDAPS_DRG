import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { LibroComponent } from './Pages/libro/libro.component';
import { PrestamoComponent } from './Pages/prestamo/prestamo.component';
import { AcercadeComponent } from './Pages/acercade/acercade.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuarioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'prestamos', component: PrestamoComponent},
  { path: 'libros', component: LibroComponent},
  { path: 'acerca-de', component: AcercadeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
