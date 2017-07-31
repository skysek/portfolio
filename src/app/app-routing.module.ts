import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RealisationsComponent }   from './realisations.component';
import { CompetencesComponent }   from './competences.component';
import { RealisationDetailComponent }   from './realisation-detail.component';
import { CompetenceHumaineComponent }   from './competence-humaine.component';
import { CompetenceTechniqueComponent }   from './competence-technique.component';

const routes: Routes = [
    { path: '', redirectTo: '/realisations', pathMatch: 'full' },
    { path: 'realisations',  component: RealisationsComponent },
    { path: 'competences',  component: CompetencesComponent },
    { path: 'realisation/detail', component: RealisationDetailComponent },
    //Compétences temporaires à supprimer
    { path: 'competence/humaine', component: CompetenceHumaineComponent },
    { path: 'competence/technique', component: CompetenceTechniqueComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}