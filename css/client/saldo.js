import {Template} from "meteor/templating";

import { user as User } from '../share/user';

import "./saldo.html";

import "./saldo.css";

Template.saldo.events({
    'submit .saldo ':  function(event) {
        event.preventDefault();
        const saldo_banca = event.target.banca.value;
         User.insert({
            valor: saldo_banca,
        });
    }
});
