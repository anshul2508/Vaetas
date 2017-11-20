import { Component, OnInit } from '@angular/core';
import {Video} from '../../../Models/Video';
import {InvidzService} from '../../../Services/Invidz';
import {AlertService} from '../../../Services/alert';
import {Router} from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Video[] = [ ];
  loading = false;

  constructor(private invidz: InvidzService, private alertService: AlertService) { }

  ngOnInit() {
    this.loading = true;

    this.invidz.getVideos().subscribe( videos => {
      this.videos = videos;
      this.loading = false;
      this.alertService.success('videos loaded successfully');
      }, error => {
      this.loading = false;
      this.alertService.error(error.message);
      }
    );
  }

  addVideo(video: Video) {
    this.invidz.addVideo(video);
    console.log('add video works');
  }

   onShare(index: number) {
    console.log('share works');
   }

  onPreview(index: number) {
    console.log(this.videos[index].duration);
    console.log('preview works');
  }

  onDelete(index: number) {
    this.invidz.deleteVideo(index);
    console.log('delete works');
  }
}
