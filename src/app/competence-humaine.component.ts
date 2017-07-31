import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'competence-humaine',
    templateUrl: './competence-humaine.component.html',
    styleUrls: ['./realisation-detail.component.css']
})
export class CompetenceHumaineComponent implements OnInit {

    constructor(
        private location: Location,
        private router: Router
    ) { }

    ngOnInit(): void {

    }

    goBack(): void {
        this.location.back();
    }
}