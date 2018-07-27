const component = () => {
    let element = document.createElement('div');
    element.innerHTML = `
    <div class="start">
        <h1>Welcome to your new project!</h1>
        <p>You can now begin the development process!</p>
        <hr>
    </div>`;

    return element;
}

export const init = () => {
    document.body.appendChild(component());
}