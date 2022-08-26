import { loadRemoteModule } from "@angular-architects/module-federation";
import { NgModule }         from '@angular/core';
import {
  RouterModule,
  Routes
}                           from "@angular/router";
import { TestComponent }    from "./test/test.component";


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

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingAppModule { }
