import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTestComponentComponent } from './app-test-component/app-test-component.component';
import { PerformanceStatsComponent } from './performance-stats/performance-stats.component';

@NgModule({
  entryComponents: [
    AppTestComponentComponent,
    PerformanceStatsComponent
  ],
  declarations: [
    AppComponent,
    AppTestComponentComponent,
    PerformanceStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
