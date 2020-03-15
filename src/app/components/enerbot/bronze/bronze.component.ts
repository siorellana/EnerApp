import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { BenefitInterface } from 'src/app/models/benefit';

@Component({
  selector: 'app-bronze',
  templateUrl: './bronze.component.html',
  styleUrls: ['./bronze.component.scss']
})
export class BronzeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  editState = false;
  toEdit: BenefitInterface;
  public bronzes = [];
  public bronze = '';

  ngOnInit() {
    this.dataApi.getAllbronzes().subscribe( bronzes => {
      console.log('bronzess', bronzes);
      this.bronzes = bronzes;
    });
  }

  // Cambia el valor de editState a false y borra el id de la bronzes
  clearState() {
    this.editState = false;
    this.toEdit = null;
  }

  edit(event, bronzes: BenefitInterface) {
    this.editState = true;
    this.toEdit = bronzes;
  }

  delete(event, bronzes: BenefitInterface) {
    this.dataApi.deletebronze(bronzes);
    this.clearState();
  }

  update(bronzes: BenefitInterface){
    this.dataApi.updatebronze(bronzes);
    this.clearState();
    }

}
