export class TodoModel {
  _id: string;
  userId: string;
  title: string;
  description: string;
  isDone: boolean;

  constructor(_id: string, userId: string, title: string, description: string, isDone: boolean = false) {
    this._id = _id;
    this.userId = userId;
    this.title = title;
    this.description = description;
    this.isDone = isDone;
  }
}
