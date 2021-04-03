export interface Post {
  userId: number;
  id:     number;
  title:  string;
  body:   string;
}

export interface PostState extends Post{
  selected:boolean;
}
