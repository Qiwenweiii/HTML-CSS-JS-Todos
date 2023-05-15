const readTodos = () => {
  return JSON.parse(localStorage.getItem('todos'));
};

const writeTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// 初始化 todos 数据结构
let todos_data = [
  {
    category: 'basic',
    id: '0',
    title: '默认分类',
    todos: [
      { id: '01', todoTitle: 'will do', todoContext: 'something will todo' },
    ],
  },
];

// 如果本地有 todos，则读取并保存到 todos_data，否则初始化一个 todos
const localTodos = readTodos();

if (localTodos) {
  todos_data = localTodos;
} else {
  writeTodos(todos_data);
}
