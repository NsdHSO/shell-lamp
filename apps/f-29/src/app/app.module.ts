import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import {
  RouterModule,
  Routes
}                           from '@angular/router';

import { AppComponent }  from './app.component';
import { TestComponent } from './test/test.component';

const routes : Routes = [
  {
    path         : 'login',
    loadChildren : () =>
      loadRemoteModule ( {
        type          : 'module',
        remoteEntry   : `https://login-carni.vercel.app/remoteEntry.js`,
        exposedModule : './Module',
      } ).then ( ( m ) => m.SignInModule ),
  },
  {
    path      : 'vorkurt',
    component : TestComponent
  }
];

@NgModule ( {
  declarations : [
    AppComponent,
    TestComponent
  ],
  imports      : [
    BrowserModule,
    RouterModule.forRoot ( routes )
  ],
  providers    : [],
  bootstrap    : [ AppComponent ],
} )
export class AppModule {}
