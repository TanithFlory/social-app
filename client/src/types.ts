export interface IPostData {
  _id: string;
  title: string;
  content: string;
  postedBy: string;
  date: number;
  userName: string;
  likes: number;
  likedBy: string[];
  comments: {
    comment: string;
    commentBy: string;
  }[];
}

export interface IComment {
  commentBy: string;
  comment: string;
  _id: string;
}
