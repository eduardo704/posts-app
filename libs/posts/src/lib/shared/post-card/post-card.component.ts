import { PostState } from './../../model/post.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input()
  post: PostState;

  @Output() selected: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  select(post: PostState) {
    this.selected.emit(post);
  }
}
