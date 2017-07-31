import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'competence-technique',
    templateUrl: './competence-technique.component.html',
    styleUrls: ['./realisation-detail.component.css']
})
export class CompetenceTechniqueComponent implements OnInit {

    constructor(
        private location: Location,
        private router: Router
    ) { }

    ngOnInit(): void {

    }

    goBack(): void {
        this.location.back();
    }

    gotoRealisationDetail(): void {
        this.router.navigate(['/realisation/detail']);
    }
}