import * as $ from 'jquery';
import { getListFromServer } from './serverComm';
import { bindAddButton } from './list';

export const init = () => {
    getListFromServer();
    bindAddButton();
}