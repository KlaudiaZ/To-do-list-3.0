import Form from './Form';
import utils from './utils/utils';
import bind from './binds';


export const init = () => {
    console.log('Initializing...');
    const form = new Form;

    form.render({ mode: 'Add' });

    utils.renderAndBindTaskList();
    // bind.addTaskButton();
}