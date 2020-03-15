import { Component, OnInit } from '@angular/core';
//var customjs = require ("../../../assets/js/scripts.js");
//import * as magnificpopup from 'magnific-popup';
declare var scripts;
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import {faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
import {faCloudMeatball} from '@fortawesome/free-solid-svg-icons';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {faAdjust} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faplay = faPlay;
  faatom = faAtom;
  faFileInvoiceDollar = faFileInvoiceDollar;
  faGlobeAmericas = faGlobeAmericas;
  faCloudMeatball = faCloudMeatball;
  faPlusCircle = faPlusCircle;
  faAdjust = faAdjust;
  faCircle = faCircle;
  faChevronRight = faChevronRight;
  

  constructor() { }


  ngOnInit() {

  }


}
