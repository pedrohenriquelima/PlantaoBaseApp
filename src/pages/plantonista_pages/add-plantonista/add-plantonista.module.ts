import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlantonistaPage } from './add-plantonista';

@NgModule({
  declarations: [
    AddPlantonistaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlantonistaPage),
  ],
})
export class AddPlantonistaPageModule {}
