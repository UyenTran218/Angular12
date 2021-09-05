import { HttpServerService } from './../Services/http-server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss'],
})
export class PostDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}

  ngOnInit(): void {
    const payload = { body: '6th comment', postId: 1 };
    this.httpServerService.postComments(payload).subscribe((data) => {
      console.log('post comment', data);
    });
  }
}
