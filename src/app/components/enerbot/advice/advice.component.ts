import { AdviceInterface } from './../../../models/advice';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  editState = false;
  toEdit: AdviceInterface;
  public advices = [];
  public advice = '';

  ngOnInit() {
    this.dataApi.getAlladvices().subscribe( advices => {
      console.log('advices', advices);
      this.advices = advices;
    });
  }

  // Cambia el valor de editState a false y borra el id de la advice
  clearState() {
    this.editState = false;
    this.toEdit = null;
  }

  edit(event, advice: AdviceInterface) {
    this.editState = true;
    this.toEdit = advice;
  }

  delete(event, advice: AdviceInterface) {
    this.dataApi.deleteadvice(advice);
    this.clearState();
  }

  update(advice: AdviceInterface){
    this.dataApi.updateadvice(advice);
    this.clearState();
    }

}
