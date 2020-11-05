import Login from './components/login';
import Contacts from "./components/contacts";
import Landing from "./components/landing";
import Groups from "./components/groups";
import addContact from "./components/addContact"

export default [
    {path: '/', component: Landing},
    {path: '/login', component: Login},
    {path: '/contacts', component: Contacts},
    {path: '/contacts/groups', component: Groups},
    {path: '/contacts/add', component: addContact}
]