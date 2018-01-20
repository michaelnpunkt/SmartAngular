import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MediaItem } from "../media-item";
import { Voucher } from "../../shared/index";
import { VouchersService } from "../../vouchers/voucher.service";
import * as moment from 'moment';
import { Observable } from "rxjs/Observable";
import { Observer, Subscription } from "rxjs";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
import { MediaService } from "./media.service";

enum CurrentView{
  SingletonObservable,
  ArrayObservable,
  ArrayObservableFromService,  
  FilterArrayBinding,
  FilterObsBinding
}

@Component({
  selector: "app-observables",
  templateUrl: "./observables.component.html",
  styleUrls: ["./observables.component.scss"]
})
export class ObservablesComponent implements OnInit, OnDestroy {

  media: Observable<MediaItem[]>;
  mediaBS: Observable<MediaItem[]>;

  playing: Observable<MediaItem[]>;
  upcoming: Observable<MediaItem[]>;

  playingArray: MediaItem[];
  upcomingArray: MediaItem[];

  currentView: CurrentView;
  view = CurrentView;

  mediaObservable: Observable<MediaItem>
  mediaSingletonObs: Subscription;

  mediaArrayObs: Observable<MediaItem[]>
  mediaItems: MediaItem[];
    
  constructor(
    private httpClient: HttpClient,
    private http: Http,
    private vs: VouchersService,
    private mediaService: MediaService
  ) { }

  ngOnInit() {
    this.currentView = CurrentView.SingletonObservable;
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  createSingletonObservable(){

    this.currentView = CurrentView.SingletonObservable;   
    let label = "Current Media created at:"
   
    this.mediaObservable = Observable.create((observer: Observer<MediaItem>) => {
      setInterval(() => {
        observer.next(<MediaItem>{title: `${label} ${moment().format("h:mm:ss a")}`});
      }, 1000);
    });

    this.mediaSingletonObs = this.mediaObservable.subscribe(
      (data: MediaItem) => { console.log("Media created: ", data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );

  }

  unsubscribeSingletonObservable(){

    this.mediaSingletonObs.unsubscribe();
    console.log("unsbscribed mediaObsSubscritption")

  }

  createArrayObservable(){
    
    this.currentView = CurrentView.ArrayObservable;
    let label = "Media "
    const mediaArray: MediaItem[] = []
       
    this.mediaArrayObs = Observable.create((observer: Observer<MediaItem[]>) => {
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `${label} 1`, startTime: new Date()})
        observer.next(mediaArray);
      }, 0);
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `${label} 2`, startTime: new Date()})
        observer.next(mediaArray);
      }, 2000);
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `${label} 3`, startTime: new Date()})
        observer.next(mediaArray);
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `${label} 4`, startTime: new Date()})
        observer.next(mediaArray);
      }, 6000);

    });

    this.mediaArrayObs.subscribe((data)=>{
      this.mediaItems = data;
    })
  }

  getArrayObservableFromService(){

    this.currentView = CurrentView.ArrayObservableFromService;
    this.mediaService.getMediaStream().subscribe(data=>this.mediaItems = data);

  }

  useFilterStaticArray(){
    
    this.currentView = CurrentView.FilterArrayBinding;

    this.mediaService.getMedia().subscribe((data: MediaItem[])=>{
      console.log("new data arrived from mediaService.getMediaStream()", data);
      let dt = new Date();
      this.playingArray = data.filter(item => {
        return item.startTime < dt;
      });
      this.upcomingArray = data.filter(item => {
        return item.startTime >= dt;
      });
    });
  }

  useFilter(){
    
    this.currentView = CurrentView.FilterArrayBinding;

    this.media = this.mediaService.getMediaStream();
    
    // let dt = new Date();
    // this.playing = this.media$.map(mis =>
    //   mis.filter(mi => mi.startTime < dt)
    // );
    // this.upcoming = this.media$.map(mis =>
    //   mis.filter(mi => mi.startTime >= dt)
    // );   

    this.media.subscribe((data: MediaItem[]) => {
      console.log("new data arrived from mediaService.getMediaStream()", data);
      let dt = new Date();
      console.log("Compare Date", dt)
      this.playingArray = data.filter(item => {
        console.log("comparing", item);
        item.startTime < dt;
      });
      console.log("Playing Array:", this.playingArray)
      this.upcomingArray = data.filter(item => {
        item.startTime >= dt;
      });
      console.log("Upcoming Array:", this.upcomingArray)
    });

  }

  useFilterReactive(){
    debugger;

    this.currentView = CurrentView.FilterArrayBinding;

    // 
    const media$ = this.mediaService.getMediaStream();
    media$.subscribe(data=>{

      console.log("data changed", data)
      // let dt = new Date();
      // this.playingLocal = data.filter((item:MediaItem)=>{
      //   item.startTime < dt;
      // })
      // this.upcomingLocal = data.filter((item:MediaItem)=>{
      //   item.startTime >= dt;
      // })

      // let dt = new Date();
      // this.current = this.media.map(mis =>
      //   mis.filter(mi => mi.startTime < new Date())
      // );
      // this.upcoming = this.media.map(mis =>
      //   mis.filter(mi => mi.startTime >= new Date())
      // );

    })   

    this.mediaService.getMediaStream().subscribe(data =>{

      let dt = new Date();
      this.playing = this.mediaBS.map(mis =>
        mis.filter(mi => mi.startTime < new Date())
      );
      this.upcoming = this.mediaBS.map(mis =>
        mis.filter(mi => mi.startTime >= new Date())
      );

    })    
  }

  useBehaviorSubject() {

    this.currentView = CurrentView.FilterObsBinding;

    this.mediaBS = this.mediaService.getObservableUsingBehaviorSubj();

    let dt = new Date();
    this.playing = this.mediaBS.map(mis =>
      mis.filter(mi => mi.startTime < new Date())
    );
    this.upcoming = this.mediaBS.map(mis =>
      mis.filter(mi => mi.startTime >= new Date())
    );
  }
}
