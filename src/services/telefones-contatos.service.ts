import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { TelefoneContato } from './../models/telefone-contato.model';

@Injectable()
export class TelefonesContatosService {
    private telefonesContatosRef = this.db.list<TelefoneContato>('telefones-contatos');
    constructor(private db: AngularFireDatabase){}

    getTelefonesContatos() {
        return this.telefonesContatosRef;
    }
    addTelefoneContato(telefoneContato: TelefoneContato){
        return this.telefonesContatosRef.push(telefoneContato);
    }
    updateTelefoneContato(telefoneContato: TelefoneContato){
        return this.telefonesContatosRef.update(telefoneContato.key, telefoneContato);
    }
    removeTelefoneContato(telefoneContato: TelefoneContato){
        return this.telefonesContatosRef.remove(telefoneContato.key);
    }
}