import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { BenefitInterface } from 'src/app/models/benefit';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss']
})
export class BenefitComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  editState = false;
  toEdit: BenefitInterface;
  public benefits = [];
  public benefit = '';

  ngOnInit() {
    this.dataApi.getAllbenefits().subscribe( benefits => {
      console.log('benefits', benefits);
      this.benefits = benefits;
    });
  }

  // Cambia el valor de editState a false y borra el id de la benefits
  clearState() {
    this.editState = false;
    this.toEdit = null;
  }

  edit(event, benefits: BenefitInterface) {
    this.editState = true;
    this.toEdit = benefits;
  }

  delete(event, benefits: BenefitInterface) {
    this.dataApi.deletebenefit(benefits);
    this.clearState();
  }

  update(benefits: BenefitInterface){
    this.dataApi.updatebenefit(benefits);
    this.clearState();
    }

}
