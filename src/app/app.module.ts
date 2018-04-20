import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { BuscaClientesComponent } from './busca-clientes/busca-clientes.component';
import { CriarClientesComponent } from './criar-clientes/criar-clientes.component';


const routes: Routes = [
  { path: 'busca', component: BuscaClientesComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    BuscaClientesComponent,
    CriarClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
