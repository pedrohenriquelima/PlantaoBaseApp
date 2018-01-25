import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Contato } from './../models/contato.model';

@Injectable()
export class ContatosService {
    private contatosRef = this.db.list<Contato>('contatos');
    constructor(private db: AngularFireDatabase){}

    getContatos() {
        return this.contatosRef;
    }
    addContato(contato: Contato){
        return this.contatosRef.push(contato);
    }
    updateContato(contato: Contato){
        return this.contatosRef.update(contato.key, contato);
    }
    removeContato(contato: Contato){
        return this.contatosRef.remove(contato.key);
    }
}