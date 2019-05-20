const test = QUnit.test;

function todoTemplate(todo) {
    const html = /*html*/`
        <li>
            <label>
                Go for a walk in the forest
                <input type="checkbox" name="todo" checked>
            </label>
        </li>
    `;
    return html;
}

test('makes html for one to do with checked', assert => {
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
