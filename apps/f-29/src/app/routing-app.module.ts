import { loadRemoteModule }   from "@angular-architects/module-federation";
import { NgModule }           from '@angular/core';
import {
  RouterModule,
  Routes
}                             from "@angular/router";
import { AuthorizationGuard } from "ngx-virous";
import { environment }        from "../environments/environment";

const routes : Routes = [
  {
    path         : '',
    loadChildren : () =>
      loadRemoteModule ( {
        type          : 'module',
        remoteEntry   : `${ environment.shell.newpie }remoteEntry.js`,
        exposedModule : './Module',
      } ).then ( ( m ) => m.InductionModule ),
  },
  {
    path         : 'login',
    loadChildren : () =>
      loadRemoteModule ( {
        type          : 'module',
        remoteEntry   : `${ environment.shell.tet }remoteEntry.js`,
        exposedModule : './Module',
      } ).then ( ( m ) => m.SignInModule ),
  },
  {
    path         : 'vorkurt',
    loadChildren : () =>
      loadRemoteModule ( {
        type          : 'module',
        remoteEntry   : `${ environment.shell.herus }remoteEntry.js`,
        exposedModule : './Module',
      } ).then ( ( m ) => m.AppModule ),
    canActivate  : [ AuthorizationGuard ]
  }
];

@NgModule ( {
  declarations : [],
  imports      : [
    RouterModule.forRoot ( routes )
  ],
  exports      : [
    RouterModule
  ]
} )
export class RoutingAppModule {}
