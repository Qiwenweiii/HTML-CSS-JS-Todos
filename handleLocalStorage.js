const readData = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

const writeData = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

// 初始化分类的数据结构
let categories = [
  {
    id: 0,
    title: '默认分类',
    children: null,
  },
];

// 初始化 todos 数据结构
let todos_data = [
  {
    category_id: 0,
    id: 0,
    todos: [],
  },
];

// 读取本地的分类数据
const localCategory = readData('category');
if (localCategory) {
  categories = localCategory;
} else {
  writeData('category', categories);
}

// 如果本地有 todos，则读取并保存到 todos_data，否则初始化一个 todos
const localTodos = readData('todos');
if (localTodos) {
  todos_data = localTodos;
} else {
  writeData('todos', todos_data);
}
