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
    loadChildren : () => import('newpie/Module').then ( m => m.InductionModule )
  },
  {
    path         : 'login',
    loadChildren : () => import('login/Module').then ( m => m.SignInModule )
  },
  {
    path         : 'vorkurt',
    loadChildren : () => import('herus/Module').then ( m => m.AppModule ),
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
