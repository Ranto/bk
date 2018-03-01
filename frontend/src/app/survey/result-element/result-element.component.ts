import { Result } from './../../model/result.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'result-element',
    templateUrl: './result-element.component.html',
    styleUrls: ['./result-element.component.css']
})
export class ResultElementComponent implements OnInit {

    @Input() result: Result;

    constructor() { }

    ngOnInit() {
    }

}
