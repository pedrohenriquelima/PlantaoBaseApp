import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AddContatoPage } from '../add-contato/add-contato';
import { Contato } from './../../../models/contato.model';
import { ContatosService } from './../../../services/contatos.service';

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html',
})
export class ContatosPage {

  contatos$: Observable<Contato[]>;
  loading = this.loadingCtrl.create({
    content: 'Carregando...'
  });
  constructor(public navCtrl: NavController, private contatosService: ContatosService, 
    private loadingCtrl: LoadingController) {
    this.loading.present();
    this.contatos$ = this.contatosService.getContatos()
        .snapshotChanges()
        .map(
      changes =>{
        this.loading.dismiss();
        return changes.map(c => ({
          key: c.payload.key, 
          ...c.payload.val()
        }));
      },
      error =>{
        console.log('Não foi possível obter a lista de Contatos');
        this.loading.dismiss();
      }
    );
  }
  
  navigateToAddContatoPage(){
    this.navCtrl.push(AddContatoPage);
  }


}