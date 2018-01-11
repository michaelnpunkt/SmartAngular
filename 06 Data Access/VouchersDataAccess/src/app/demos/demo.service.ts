import { HttpClient } from '@angular/common/http';
import * as url from 'url';
import { DemoItem } from './demoItem';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { MediaItem } from './media-item';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class DemoService {

    private items: DemoItem [] ;
    private media: MediaItem [] = null;

    constructor(private httpClient: HttpClient) {   
        this.buildMedia();
    }

    getItems() : Promise<any> {
        return this.httpClient.get('/assets/demos.json').toPromise();          
    }

    getMedia() : Observable<MediaItem[]> {
        let bs : BehaviorSubject<MediaItem[]> = new BehaviorSubject<MediaItem[]>(this.media);        
        return bs.asObservable();
    }

    private buildMedia() {
        this.media = new Array();
        let dt = new Date();
        let t0: Date = new Date(dt.setMinutes(dt.getMinutes()-2))
        for (let i=0; i < 10; i++) {            
            let mi: MediaItem = { title: "Movie " + i, startTime: new Date(t0.setSeconds(t0.getSeconds()+20)) };
            this.media.push(mi);
        }
        console.log("Media",this.media)
    }
}
