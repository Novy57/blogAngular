import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() postCreatedAt : string;
  loveIts : number;

  constructor() { }

  ngOnInit() {
    this.loveIts = 0;
  }

  OnLoveIt() {
    this.loveIts++;
  }

  OnDontLoveIt() {
    this.loveIts--;
  }

  getColor() {
    if (this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

}
