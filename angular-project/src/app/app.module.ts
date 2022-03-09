import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadertextComponent } from './headertext/headertext.component';
import { TextboxComponent } from './textbox/textbox.component';
import { SliderboxComponent } from './sliderbox/sliderbox.component';
import { CashtextComponent } from './cashtext/cashtext.component';
import { MiddletextComponent } from './middletext/middletext.component';
import { LasttextComponent } from './lasttext/lasttext.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadertextComponent,
    TextboxComponent,
    SliderboxComponent,
    CashtextComponent,
    MiddletextComponent,
    LasttextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
