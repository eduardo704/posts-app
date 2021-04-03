import { PostCardComponent } from './shared/post-card/post-card.component';
import { PostsRoutingModule } from './posts.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  imports: [CommonModule, PostsRoutingModule],
  declarations: [
    PostListComponent,
    PostCardComponent,
    PostDetailComponent

  ],
  exports: [
    PostListComponent
  ],
})
export class PostsModule {}
