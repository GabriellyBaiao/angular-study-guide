import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
 import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { AlunosModule } from './alunos/alunos.module';

// import { CursosModule } from './cursos/cursos.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    // AlunosComponent
   /* CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // CursosModule,
    AppRoutingModule,
    // AlunosModule
  ],
  // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
