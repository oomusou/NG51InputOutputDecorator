import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CounterComponent } from './component/counter/counter.component';
import { CounterService } from './service/count/counter.service';
import { CounterInterfaceToken } from './interface/interface-token';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CounterService,
    {provide: CounterInterfaceToken, useExisting: CounterService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
