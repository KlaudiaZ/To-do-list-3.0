import Form from './Form';
import List from './List';

export const init = function () {
    console.log('Initializing...');
    const list = new List(true);
    const form = new Form(true);
}