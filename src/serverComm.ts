import axios from 'axios';
import config from './config';
import { renderList } from './list';

export const getListFromServer = () => {
    axios.get(config.url.getList)
        .then((result) => {
            renderList(result.data);
        })
        .catch((error) => {
            alert(error);
        });
}