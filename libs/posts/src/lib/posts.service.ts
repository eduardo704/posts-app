import { Post, PostState } from './model/post.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostsService {
  postsState: BehaviorSubject<PostState[]> = new BehaviorSubject([]);
  postState$ = this.postsState.asObservable();

  private URL = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get<Post[]>(this.URL + '/posts').pipe(
      take(1),
      map((posts) => {
        return posts.map((post) => {
          return { ...post, selected: false };
        });
      }),
      tap((state) => {
        this.postsState.next(state);
      })
    );
  }

  setPostSelected(id: number) {
    this.postState$.pipe(take(1)).subscribe((posts) => {
      const postIndex = posts.findIndex((postS) => postS.id === id);
      const post = posts[postIndex];
      const newPost = {
        ...post,
        selected: !post.selected,
      };
      posts[postIndex] = newPost;
      this.postsState.next([...posts]);
    });
  }
}
