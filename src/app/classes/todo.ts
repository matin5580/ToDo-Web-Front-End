import { Category } from './../enum/category-type';
export class ToDo {
  dateTime: any = null;
  id: any;
  isMyDay: boolean = false;
  isStarred: boolean = false;
  note: string = "";
  status: string = '';
  task: string = '';
  category = Category.TASKS
  pictures: any;
}