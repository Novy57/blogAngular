import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Posts = [
    {
      title: 'Article 1',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt aliquam lectus ullamcorper volutpat. Mauris luctus dignissim risus dapibus ultrices. Aenean ac orci non ipsum blandit dignissim. Sed pretium leo nisi, eu malesuada ex suscipit ut. Nam quis elementum dolor. Vivamus viverra vitae lacus lobortis facilisis.',
      created_at: new Date()
    },
    {
      title: 'Article 2',
      content : 'Mauris luctus dignissim risus dapibus ultrices. Aenean ac orci non ipsum blandit dignissim. Sed pretium leo nisi, eu malesuada ex suscipit ut. Nam quis elementum dolor. Vivamus viverra vitae lacus lobortis facilisis. Vivamus faucibus ligula iaculis neque aliquam porta. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      created_at: new Date()
    },
    {
      title: 'Article 3',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt aliquam lectus ullamcorper volutpat. Mauris luctus dignissim risus dapibus ultrices. Aenean ac orci non ipsum blandit dignissim. Sed pretium leo nisi, eu malesuada ex suscipit ut. Nam quis elementum dolor. Vivamus viverra vitae lacus lobortis facilisis.Mauris luctus dignissim risus dapibus ultrices. Aenean ac orci non ipsum blandit dignissim. Sed pretium leo nisi, eu malesuada ex suscipit ut. Nam quis elementum dolor. Vivamus viverra vitae lacus lobortis facilisis. Vivamus faucibus ligula iaculis neque aliquam porta. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      created_at: new Date()
    }
  ];

}
