import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddContatoPage } from './add-contato';

@NgModule({
  declarations: [
    AddContatoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddContatoPage),
  ],
})
export class AddContatoPageModule {}
