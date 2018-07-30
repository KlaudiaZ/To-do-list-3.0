import * as $ from 'jquery';
import { getListFromServer } from './serverComm';

export const init = () => {
    getListFromServer();
}