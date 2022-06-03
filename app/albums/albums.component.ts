import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../Models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums?: Album[];

  constructor(private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(){
    this.albumService.getAllAlbums().subscribe(data=>{
      this.albums=data;
    }

    );
  }

}
