interface Item {
  id: string;
}

interface ITodo extends Item {
  title: string;
  completed: boolean;
  listId: string;
}

interface ITodoState {
  todos: ITodo[];
}

interface IList extends Item{
  title: string;
}

interface IListState {
  lists: IList[];
}

export type {
  Item,
  ITodo,
  ITodoState,
  IList,
  IListState,
}

