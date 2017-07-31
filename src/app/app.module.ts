import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { RealisationsComponent }   from './realisations.component';
import { CompetencesComponent }   from './competences.component';
import { RealisationDetailComponent }   from './realisation-detail.component';
import { CompetenceHumaineComponent }   from './competence-humaine.component';
import { CompetenceTechniqueComponent }   from './competence-technique.component';

@NgModule({
  declarations: [
    AppComponent,
    RealisationsComponent,
    CompetencesComponent,
    RealisationDetailComponent,
    CompetenceHumaineComponent,
    CompetenceTechniqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

