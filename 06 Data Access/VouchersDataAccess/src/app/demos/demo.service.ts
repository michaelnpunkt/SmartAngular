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
export class DemoService {
  private items: DemoItem[];

  //created manually
  private media: MediaItem[] = null;

  //returned as stream
  private mediaArray: MediaItem[] = [];

  constructor(private httpClient: HttpClient) {
    // this.buildMedia();
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

  private buildStream() {}

  getMediaStream(): Observable<MediaItem[]> {
    debugger;

    const ct: number = 10;
    const label = "Media created at:";

    let mediaObservableArray: Observable<MediaItem[]> = Observable.create(
      (observer: Observer<MediaItem[]>) => {
        for (let i = 0; i < ct; i++) {
          this.addItem(i,observer,label)
        }
        setTimeout(() => {
          // observer.error('this does not work');
          observer.complete();
          console.log("Oberver: Complete")
        }, (ct + 1) * 1000);
        this.addItem(12,observer,label)
      }
    );
    return mediaObservableArray;
  }
  private addItem(ct:number, observer: Observer<MediaItem[]>, label):void{
    setTimeout(() => {
      this.mediaArray.push(<MediaItem>{
        title: `${label} ${moment().format("h:mm:ss a")}`
      });
      observer.next(this.mediaArray);
    }, (ct + 2) * 1000);
  }
}