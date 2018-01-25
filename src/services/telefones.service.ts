import { Telefone } from './../models/telefone.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TelefonesService {
    private telefonesRef = this.db.list<Telefone>('telefones');
    constructor(private db: AngularFireDatabase){}

    getTelefones() {
        return this.telefonesRef;
    }
    addTelefone(telefone: Telefone){
        return this.telefonesRef.push(telefone);
    }
    updateTelefone(telefone: Telefone){
        return this.telefonesRef.update(telefone.key, telefone);
    }
    removeTelefone(telefone: Telefone){
        return this.telefonesRef.remove(telefone.key);
    }
}