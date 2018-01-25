import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Plantonista } from '../../../models/plantonista.model';
import { PlantonistasService } from '../../../services/plantonistas.service';
import { PlantonistasPage } from '../plantonistas/plantonistas';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the EditPlantonistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-plantonista',
  templateUrl: 'edit-plantonista.html',
})
export class EditPlantonistaPage {

  plantonista: Plantonista;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private plantonistasService: PlantonistasService,
    public toastCtrl: ToastController
  ){}

  ionViewWillLoad() {
    this.plantonista = this.navParams.get('plantonista');
  }
  updatePlantonista(plantonista: Plantonista){
    this.plantonistasService.updatePlantonista(plantonista).then(ref => {
      this.showToast('Plantonista atualizado com sucesso');
      this.navCtrl.setRoot(PlantonistasPage);
    });
  }
  removePlantonista(plantonista: Plantonista){
    this.plantonistasService.removePlantonista(plantonista).then(ref => {
      this.showToast('Plantonista removido com sucesso');
      this.navCtrl.setRoot(PlantonistasPage)
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
