import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes =[
  {
    path:'',
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: `https://login-carni.vercel.app/remoteEntry.js`,
        exposedModule: './Module'
    }).then(m => m.SignInModule),
},
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
