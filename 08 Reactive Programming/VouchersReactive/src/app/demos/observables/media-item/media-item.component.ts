import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MediaItem } from '../../media-item';

@Component({
  selector: 'app-mediaitem',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  @Input() item: MediaItem
  @Input() isPlaying: boolean
  
  constructor() { }

  ngOnInit() {
  }

}
