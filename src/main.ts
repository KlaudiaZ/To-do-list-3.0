import './styles/styles.css';
import * as $ from 'jquery';
import { init } from './index';

$(() => {
    console.log('TypeScript & jQuery reporting in!');
    init();
})