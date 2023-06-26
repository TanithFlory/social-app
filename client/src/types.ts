export interface IPostData {
  _id: string;
  title: string;
  content: string;
  postedBy: string;
  date: number;
  userName: string;
  likes: number;
  likedBy: string[];
}
