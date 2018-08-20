import utils from './utils/utils';
import bind from './binds';

export const init = () => {
    console.log('Initializing...');
    // utils.clearForm();
    utils.renderAndBindTaskList();
    bind.addTaskButton();
}