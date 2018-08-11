import { getTasks } from './modules/getTasks';

export const init = () => {
    console.log('Initializing...')
    getTasks();
}