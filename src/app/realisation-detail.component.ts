import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'realisation-detail',
    templateUrl: './realisation-detail.component.html',
    styleUrls: ['./realisation-detail.component.css']
})
export class RealisationDetailComponent implements OnInit {

    constructor(
        private location: Location,
        private router: Router
    ) { }

    ngOnInit(): void {

    }

    goBack(): void {
        this.location.back();
    }

    gotoJavaCompetence(): void {
        this.router.navigate(['/competence/technique']);
    }
}