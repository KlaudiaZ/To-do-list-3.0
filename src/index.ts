import Utils from './utils/utils';
import bind from './binds';

const utils = new Utils;

export const init = () => {
    console.log('Initializing...');
    utils.renderAndBindTaskList();
    bind.updateButton();
}

