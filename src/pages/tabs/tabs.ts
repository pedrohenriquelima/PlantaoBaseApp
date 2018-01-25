import { Component } from '@angular/core';

import { PlantonistasPage } from '../plantonista_pages/plantonistas/plantonistas';
import { HomePage } from '../home/home';
import { ContatosPage } from '../contato_pages/contatos/contatos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PlantonistasPage;
  tab3Root = ContatosPage;
  

  constructor() {

  }
}
