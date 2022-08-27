import { NgModule }                from '@angular/core';
import { MatIconModule }           from "@angular/material/icon";
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IconCoreModule }          from "ngx-liburg-icon";
import { ToastrModule }            from "ngx-toastr";

import { AppComponent }     from './app.component';
import { RoutingAppModule } from "./routing-app.module";
import { TestComponent }    from './test/test.component';

@NgModule ( {
  declarations : [
    AppComponent,
    TestComponent
  ],
  imports : [
    BrowserModule,
    RoutingAppModule,
    IconCoreModule,
    MatIconModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-left',
      preventDuplicates: true,
    }),
  ],
  providers    : [],
  bootstrap    : [ AppComponent ],
} )
export class AppModule {}
