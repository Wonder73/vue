import Vue from 'Vue'
import Cell from './cell.vue';
import store from '../../store/index.js';

new Vue({
	el:'#cell',
	store,
	render:h=>h(Cell)
})