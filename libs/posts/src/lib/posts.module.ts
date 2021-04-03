import { PostCardComponent } from './shared/post-card/post-card.component';
import { PostsRoutingModule } from './posts.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [CommonModule, PostsRoutingModule],
  declarations: [PostListComponent, PostCardComponent],
  exports: [PostListComponent],
})
export class PostsModule {}
