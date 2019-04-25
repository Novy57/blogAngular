import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: string;
  @Input() postLoveIts: number;
  @Input() index: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  OnLoveIt() {
    this.postService.loveIt(this.index);
  }

  OnDontLoveIt() {
    this.postService.dontLoveIt(this.index);
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  onDeletePost() {
    this.postService.removePost(this.index);
  }
}
