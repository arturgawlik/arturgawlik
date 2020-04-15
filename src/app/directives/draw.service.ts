import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DrawService {

    events$ = new Subject<string>();

    constructor() {
    }

    clear() {
        this.events$.next('clear');
    }

}
