import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Plantonista } from '../models/plantonista.model';

@Injectable()
export class PlantonistasService {
    private plantonistasRef = this.db.list<Plantonista>('plantonistas');
    constructor(private db: AngularFireDatabase){}

    getPlantonistas() {
        return this.plantonistasRef;
    }
    addPlantonista(plantonista: Plantonista){
        return this.plantonistasRef.push(plantonista);
    }
    updatePlantonista(plantonista: Plantonista){
        return this.plantonistasRef.update(plantonista.key, plantonista);
    }
    removePlantonista(plantonista: Plantonista){
        return this.plantonistasRef.remove(plantonista.key);
    }
}