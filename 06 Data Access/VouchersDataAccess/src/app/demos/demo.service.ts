import { HttpClient } from '@angular/common/http';
import { DemoItem } from './demoItem';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { MediaItem } from './media-item';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observer } from 'rxjs/Observer';
import * as moment from 'moment';

@Injectable()
export class DemoService{
  private items: DemoItem[];
  private media: MediaItem[] = null;  

  constructor(private httpClient: HttpClient) {
    this.buildMedia();   
  }

  getItems(): Promise<any> {
    return this.httpClient.get("/assets/demos.json").toPromise();
  }

  getMedia(): Observable<MediaItem[]> {
    let bs: BehaviorSubject<MediaItem[]> = new BehaviorSubject<MediaItem[]>(
      this.media
    );
    return bs.asObservable();
  }

  private buildMedia() {
    this.media = new Array();
    let dt = new Date();
    let t0: Date = new Date(dt.setMinutes(dt.getMinutes() - 2));
    for (let i = 0; i < 10; i++) {
      let mi: MediaItem = {
        title: "Movie " + i,
        startTime: new Date(t0.setSeconds(t0.getSeconds() + 20))
      };
      this.media.push(mi);
    }
  }

  getMediaStream(): Observable<MediaItem[]> {
      
      const label = "Media created at:"
      const mediaArray: MediaItem[] = []

      let mediaObservableArray: Observable<MediaItem[]> = Observable.create((observer: Observer<MediaItem[]>) => {
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `${label} ${moment().format("h:mm:ss a")}`})
        observer.next(mediaArray);
      }, 0);
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `${label} ${moment().format("h:mm:ss a")}`})
        observer.next(mediaArray);
      }, 2000);
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `${label} ${moment().format("h:mm:ss a")}`})
        observer.next(mediaArray);
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `${label} ${moment().format("h:mm:ss a")}`})
        observer.next(mediaArray);
      }, 6000);

    });

    return mediaObservableArray;
  }

}

