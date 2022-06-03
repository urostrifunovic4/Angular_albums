import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../Models/photo';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos?: Photo[];

  constructor(private photoService: PhotosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const albumId=Number(this.route.snapshot.paramMap.get('albumId'));
    this.getPhotos(albumId);
  }

  getPhotos(albumId?: number){
    this.photoService.getAllPhotos(albumId).subscribe(data=>{
      this.photos=data;
    }

    );
  }

  onClick(thumbnailUrl?: string){
    window.open(thumbnailUrl,'_blank');
  }

}
