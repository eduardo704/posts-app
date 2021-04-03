import { PostState } from './../../model/post.model';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input()
  post:PostState;

  constructor() { }

  ngOnInit() {
  }

  select(post:PostState){
    const reverse=!post.selected;
    post.selected= reverse;
  }

}
