import todoTemplate from './todo-template.js';
import htmlToDOM from './html-to-DOM.js';
import todos from '../data/todos.js';

const todoParent = document.getElementById('todos');

todos.forEach(todo => {
    const html = todoTemplate(todo);
    const dom = htmlToDOM(html);
    todoParent.appendChild(dom);
});
