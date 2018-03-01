import { Survey } from './../../model/survey.model';
import { SurveyService } from './../survey.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-survey-list',
    templateUrl: './survey-list.component.html',
    styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit, OnDestroy {
    surveys: Survey[];
    listSubsc: Subscription;

    constructor(private surveyService: SurveyService, private toasterService: ToasterService) { }

    ngOnInit() {
        this.listSubsc = this.surveyService.listSurvey().subscribe(
            data => this.surveys = data,
            error => this.toasterService.pop("error", "Erreur sur la source de données.")
        );
    }

    ngOnDestroy() {
        this.listSubsc.unsubscribe();
    }

}
