import { Post } from './model/post.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private URL = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get<Post[]>(this.URL + '/posts');
  }
}
