import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import {CountUpModule} from 'ngx-countup';
import { AppComponent } from './app.component';
import { GlobalComponent } from './global/global.component';
import { LinksComponent } from './links/links.component';
import { CovidProtectionComponent } from './covid-protection/covid-protection.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WorldStatsComponent } from './world-stats/world-stats.component';
import { TopTenComponent } from './top-ten/top-ten.component';
import { StateListComponent } from './state-list/state-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    LinksComponent,
    CovidProtectionComponent,
    FooterComponent,
    WorldStatsComponent,
    TopTenComponent,
    StateListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FontAwesomeModule,
    ChartsModule,
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
