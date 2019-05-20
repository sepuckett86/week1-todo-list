const test = QUnit.test;

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

test('makes html for to-do with checked', assert => {
    // Arrange
    const todo = {
        task: 'Go for a walk in the forest',
        completed: true
    };
    const expected = /*html*/`
        <li>
            <label>
                Go for a walk in the forest
                <input type="checkbox" name="todo" checked>
            </label>
        </li>
    `;
    // Act
    const html = todoTemplate(todo);
    // Assert
    assert.htmlEqual(html, expected);
});

test('makes html for to-do without checked', assert => {
    // Arrange
    const todo = {
        task: 'Go for a walk in the forest',
        completed: false
    };
    const expected = /*html*/`
        <li>
            <label>
                Go for a walk in the forest
                <input type="checkbox" name="todo">
            </label>
        </li>
    `;
    // Act
    const html = todoTemplate(todo);
    // Assert
    assert.htmlEqual(html, expected);
});