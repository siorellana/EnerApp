import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public books = [];
  public book = '';

  public coins = [];
  public coin = '';

  ngOnInit() {
    this.dataApi.getAllBooks().subscribe( books => {
      console.log('BOOKS', books);
      this.books = books;
    });

  }

}
