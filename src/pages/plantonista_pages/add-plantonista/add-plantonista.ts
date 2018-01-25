import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Plantonista } from '../../../models/plantonista.model';
import { PlantonistasService } from '../../../services/plantonistas.service'
import { PlantonistasPage } from '../plantonistas/plantonistas';

@Component({
  selector: 'page-add-plantonista',
  templateUrl: 'add-plantonista.html',
})

export class AddPlantonistaPage {

  plantonista: Plantonista = {
    nomePlantonista: '',
    idPlantonista: '',
  };
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private plantonistasService: PlantonistasService) {}

  addPlantonista(plantonista: Plantonista){
    this.plantonistasService.addPlantonista(plantonista).then(ref => {
      this.navCtrl.setRoot(PlantonistasPage);
    });
  }

}
