import { Injectable } from '@angular/core';
import { MediaItem } from '../media-item';
import { MovieGenerator } from './movie-generator';
import { Observable } from 'rxjs/Observable';
import { Observer, BehaviorSubject } from 'rxjs';

@Injectable()
export class MediaService {
  
  private itemCount: number = 10;

  //returned as stream
  private media$: MediaItem[] = [];

  private mediaBS$: MediaItem[] = [];
  
  constructor() {    }

  getMediaStream(): Observable<MediaItem[]> {
    
    console.log("using: getMediaStream()")
    console.log("reset media$")
    this.media$ = [];

    let movieGenerator = MovieGenerator(this.itemCount);
    
    let mediaObservableArray: Observable<MediaItem[]> = Observable.create(
      (observer: Observer<MediaItem[]>) => {
        for (let i = 0; i < this.itemCount; i++) {
          this.addItem(i, movieGenerator.next().value,observer)
        }
      }
    );
    return mediaObservableArray;
  }
  
  private addItem(idx: number, item: MediaItem, observer: Observer<MediaItem[]>):void{
    setTimeout(() => {
      this.media$.push(item);
      observer.next(this.media$);
    }, (idx + 2) * 1000);
  }

  private buildMedia(initialCount: number) : MediaItem[] {
    let movieGenerator = MovieGenerator(initialCount);

    this.mediaBS$ = new Array();
    for (let i = 0; i < initialCount; i++) {
      this.mediaBS$.push(movieGenerator.next().value)
    }
    return this.mediaBS$;
  }

  getObservableUsingBehaviorSubj(initialCount: number = 8): Observable<MediaItem[]> {

    console.log("using: getObservableUsingBehaviorSubj()")
    let bs: BehaviorSubject<MediaItem[]> = new BehaviorSubject<MediaItem[]>(this.buildMedia(initialCount));

    return bs.asObservable();
  }

}
