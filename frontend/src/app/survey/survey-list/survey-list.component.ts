import { Result } from './../../model/result.model';
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
    results: Survey[];
    listSubsc: Subscription;
    searchText: string;

    constructor(private surveyService: SurveyService, private toasterService: ToasterService) { }

    ngOnInit() {
        this.listSubsc = this.surveyService.listSurvey().subscribe(
            data => {
                this.surveys = data;
                this.results = data;
            },
            error => this.toasterService.pop("error", "Erreur sur la source de données.")
        );
    }

    ngOnDestroy() {
        this.listSubsc.unsubscribe();
    }

    search() {
        let searchTerm = this.searchText;
        if (this.searchText) {
            let array = searchTerm.split(':');
            if (array.length > 1) {
                let spec = array[0].toLowerCase();
                if (spec == "code") {
                    array.splice(0, 1);
                    searchTerm = array.join(':');
                    this.results = this.goSearch(searchTerm, "code");
                }
                else if (spec == "name") {
                    array.splice(0, 1);
                    searchTerm = array.join(':');
                    this.results = this.goSearch(searchTerm, "name");
                }
                else {
                    console.log("DEDEDE");
                    this.results = this.goSearch(searchTerm);
                }
            } else {
                this.results = this.goSearch(searchTerm);
            }
        } else {
            this.results = this.surveys;
        }
    }

    goSearch(termSearch: string, spec = null): Survey[] {
        let result = this.surveys;
        if (spec == "code") {
            result = this.surveys.filter((val: Survey) => {
                return val.code.toLowerCase().indexOf(termSearch.toLowerCase()) > -1;
            });
        }
        else if (spec == "name") {
            result = this.surveys.filter((val: Survey) => {
                return val.name.toLowerCase().indexOf(termSearch.toLowerCase()) > -1;
            });
        }
        else {
            result = this.surveys.filter((val: Survey) => {
                return val.code.toLowerCase().indexOf(termSearch.toLowerCase()) > -1 || val.name.toLowerCase().indexOf(termSearch.toLowerCase()) > -1;
            });
        }
        return result;
    }

    reset() {
        this.searchText = null;
        this.results = this.surveys;
    }

}
