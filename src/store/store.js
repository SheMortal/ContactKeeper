import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        contacts: [{name: 'Ab', number: '012', email: 'ab@123', group: 'personal'}, {name: 'Cd', number: '345', email: 'cd@345', group: 'proffessional'}, {name: 'Ef', number: '678', email: 'ef@678', group: 'personal'}, {name: 'Gh', number: '901', email: 'gh@901', group: 'proffesional'}, {name: 'Ij', number: '234', email: 'ij@234', group: 'personal'}, {name: 'Kl', number: '567', email: 'kl@567', group: 'professional'}]
    }
})