import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AddPlantonistaPage } from '../add-plantonista/add-plantonista';
import { PlantonistasService } from '../../../services/plantonistas.service'
import { Observable } from 'rxjs/Observable';
import { Plantonista } from '../../../models/plantonista.model';

@Component({
  selector: 'page-plantonistas',
  templateUrl: 'plantonistas.html'
})
export class PlantonistasPage {

  plantonistas$: Observable<Plantonista[]>;
  loading = this.loadingCtrl.create({
    content: 'Carregando...'
  });
  constructor(public navCtrl: NavController, private plantonistasService: PlantonistasService, 
    private loadingCtrl: LoadingController) {
    this.loading.present();
    this.plantonistas$ = this.plantonistasService.getPlantonistas()
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
        console.log('Não foi possível obter a lista de plantonistas');
        this.loading.dismiss();
      }
    );
  }
  
  navigateToAddPlantonistaPage(){
    this.navCtrl.push(AddPlantonistaPage);
  }


}
