export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface Author {
  id: string;
  name: string;
}

export interface Comment {
  id: string;
  comment: string;
  commentedAt: Date;
  likes: number;
  dislikes: number;
  user: Author;
}

export interface Post {
  id: string;
  name: string;
  body: string;
  createAt: Date;
  author: Author;
  likes: number;
  dislikes: number;
  status: string;
  _commentsMeta: {
    count: number;
  };
  comments: Comment[];
}
