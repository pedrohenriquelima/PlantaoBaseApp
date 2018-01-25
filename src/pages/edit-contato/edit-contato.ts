import { Telefone } from './../../models/telefone.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Contato } from './../../models/contato.model';
import { ContatosPage } from './../contato_pages/contatos/contatos';
import { ContatosService } from './../../services/contatos.service';

/**
 * Generated class for the EditContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-contato',
  templateUrl: 'edit-contato.html',
})
export class EditContatoPage {

  contato: Contato;
  telefone: Telefone;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private contatosService: ContatosService,
    public toastCtrl: ToastController
  ){}

  ionViewWillLoad() {
    this.contato = this.navParams.get('contato');
  }
  updateContato(contato: Contato){
    this.contatosService.updateContato(contato).then(ref => {
      this.showToast('Contato atualizado com sucesso');
      this.navCtrl.setRoot(ContatosPage);
    });
  }
  removeContato(contato: Contato){
    this.contatosService.removeContato(contato).then(ref => {
      this.showToast('Contato removido com sucesso');
      this.navCtrl.setRoot(ContatosPage)
    })
  }
  showToast(strMessageToast: string) {
    let toast = this.toastCtrl.create({
      message: strMessageToast,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
