import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postSubject = new Subject<any[]>();
  private posts = [
    {
      title: 'Article 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt aliquam lectus ullamcorper volutpat. Mauris luctus dignissim risus dapibus ultrices. Aenean ac orci non ipsum blandit dignissim. Sed pretium leo nisi, eu malesuada ex suscipit ut. Nam quis elementum dolor. Vivamus viverra vitae lacus lobortis facilisis.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Article 2',
      content: 'Mauris luctus dignissim risus dapibus ultrices. Aenean ac orci non ipsum blandit dignissim. Sed pretium leo nisi, eu malesuada ex suscipit ut. Nam quis elementum dolor. Vivamus viverra vitae lacus lobortis facilisis. Vivamus faucibus ligula iaculis neque aliquam porta. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Article 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt aliquam lectus ullamcorper volutpat. Mauris luctus dignissim risus dapibus ultrices. Aenean ac orci non ipsum blandit dignissim. Sed pretium leo nisi, eu malesuada ex suscipit ut. Nam quis elementum dolor. Vivamus viverra vitae lacus lobortis facilisis.Mauris luctus dignissim risus dapibus ultrices. Aenean ac orci non ipsum blandit dignissim. Sed pretium leo nisi, eu malesuada ex suscipit ut. Nam quis elementum dolor. Vivamus viverra vitae lacus lobortis facilisis. Vivamus faucibus ligula iaculis neque aliquam porta. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() {}

  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }

  addPost(title: string, content: string) {
    const postObject = {
      title: '',
      content: '',
      loveIts: 0,
      created_at: new Date()
    };
    postObject.title = title;
    postObject.content = content;
    this.posts.push(postObject);
    this.emitPostSubject();
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.emitPostSubject();
  }

  loveIt(index: number) {
    this.posts[index].loveIts++;
    this.emitPostSubject();
  }

  dontLoveIt(index: number) {
    this.posts[index].loveIts--;
    this.emitPostSubject();
  }
}
