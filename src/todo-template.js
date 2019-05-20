function todoTemplate(todo) {
    let checked = '';

    if(todo.completed) {
        checked = ' ' + 'checked';
    }
    const html = /*html*/`
        <li>
            <label>
                Go for a walk in the forest
                <input type="checkbox" name="todo"${checked}>
            </label>
        </li>
    `;
    return html;
}

export default todoTemplate;