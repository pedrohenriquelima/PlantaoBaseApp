import { TelefonesContatosService } from './../../../services/telefones-contatos.service';
import { TelefonesService } from './../../../services/telefones.service';
import { TelefoneContato } from './../../../models/telefone-contato.model';
import { Telefone } from './../../../models/telefone.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contato } from '../../../models/contato.model';
import { ContatosPage } from '../contatos/contatos';
import { ContatosService } from '../../../services/contatos.service';

@Component({
  selector: 'page-add-contato',
  templateUrl: 'add-contato.html',
})
export class AddContatoPage {

  contato: Contato = {
    nomeContato: '',
    cargoContato: '',
    emailContato: '' 
  }

  telefones: Telefone[] = [{
    descricaoTelefone: '',
    dddTelefone: undefined,
    numeroTelefone: undefined
  }]

  telefoneContato: TelefoneContato = {
    keyContato: undefined,
    keyTelefone: undefined
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private contatosService: ContatosService, 
    private telefonesServices: TelefonesService,
    private telefonesContatosService: TelefonesContatosService) {
  }

  addContato(contato: Contato, telefones: Telefone[]){
    this.contatosService.addContato(contato).then(refContact => {
      for(let telefone of this.telefones) {
        console.log(refContact.key);
        this.telefonesServices.addTelefone(telefone).then(refTel => {
          console.log(refTel.key);
          this.telefoneContato = {
            keyContato: refContact.key,
            keyTelefone: refTel.key
          }
          this.telefonesContatosService.addTelefoneContato(this.telefoneContato);
        })
      }
      this.navCtrl.setRoot(ContatosPage);
    })
  }

  addTelefone(){
    this.telefones.push({
      descricaoTelefone: '',
      dddTelefone: undefined,
      numeroTelefone: undefined
    })
  }
}
