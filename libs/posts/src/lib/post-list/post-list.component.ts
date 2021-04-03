import { Post, PostState } from './../model/post.model';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Observable<PostState[]>;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe();
    this.posts = this.postsService.postState$.pipe(tap(posts=>{
      console.log(posts)
    }));
  }

  select(index){
    this.postsService.setPostSelected(index+1);
  }
}
