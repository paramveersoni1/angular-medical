import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from '../../shared/models/loader-state';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    private loaderSubject = new Subject<LoaderState>();
    loaderState = this.loaderSubject.asObservable();
    backGroundUrls: string[] = [];

    constructor() {
    }

    show() {
        this.loaderSubject.next( {show: true});
    }

    hide() {
        this.loaderSubject.next(<LoaderState> {show: false});
    }

}
