import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { GlobalComponent } from './global/global.component';
import { LinksComponent } from './links/links.component';
import { CovidProtectionComponent } from './covid-protection/covid-protection.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WorldStatsComponent } from './world-stats/world-stats.component';
import { TopTenComponent } from './top-ten/top-ten.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    LinksComponent,
    CovidProtectionComponent,
    FooterComponent,
    WorldStatsComponent,
    TopTenComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FontAwesomeModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
