import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ExcuseInterface } from 'src/app/models/excuse';

@Component({
  selector: 'app-excuse',
  templateUrl: './excuse.component.html',
  styleUrls: ['./excuse.component.scss']
})
export class ExcuseComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  editState = false;
  toEdit: ExcuseInterface;
  public excuses = [];
  public excuse = '';

  ngOnInit() {

    this.dataApi.getAllexcuses().subscribe( excuses => {
      console.log('excuses', excuses);
      this.excuses = excuses;
    });
  }
  
  // Cambia el valor de editState a false y borra el id de la excuses
  clearState() {
    this.editState = false;
    this.toEdit = null;
  }

  edit(event, excuses: ExcuseInterface) {
    this.editState = true;
    this.toEdit = excuses;
  }

  delete(event, excuses: ExcuseInterface) {
    this.dataApi.deleteexcuse(excuses);
    this.clearState();
  }

  update(excuses: ExcuseInterface){
    this.dataApi.updateexcuse(excuses);
    this.clearState();
    }

}
