import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadertextComponent } from './headertext/headertext.component';
import { BoxLgComponent } from './box-lg/box-lg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadertextComponent,
    BoxLgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
