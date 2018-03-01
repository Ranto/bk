import { ToasterService } from 'angular2-toaster';
import { Result } from './../../model/result.model';
import { Subscription } from 'rxjs';
import { SurveyService } from './../survey.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-survey-detail',
    templateUrl: './survey-detail.component.html',
    styleUrls: ['./survey-detail.component.css']
})
export class SurveyDetailComponent implements OnInit, OnDestroy {

    survSubsc: Subscription;
    routeSubsc: Subscription;
    code: string;
    results: Result[];

    constructor(private surveyService: SurveyService, private route: ActivatedRoute, private toasterService: ToasterService) { }

    ngOnInit() {
        this.routeSubsc = this.route.params.subscribe(params => {
            this.code = params['code'];
            this.survSubsc = this.surveyService.getSurvey(this.code).subscribe(data => {
                this.results = data;
            }, error => this.toasterService.pop("error", "Erreur sur la source de données."));
        });
    }

    ngOnDestroy() {
        this.survSubsc.unsubscribe();
        this.routeSubsc.unsubscribe();
    }

}
