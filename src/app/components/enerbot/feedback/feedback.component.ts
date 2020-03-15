import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { FeedbackInterface } from 'src/app/models/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  editState = false;
  toEdit: FeedbackInterface;
  public feedbacks = [];
  public feedback = '';

  ngOnInit() {
    this.dataApi.getAllfeedbacks().subscribe( feedbacks => {
      console.log('feedbacks', feedbacks);
      this.feedbacks = feedbacks;
    });
  }

  // Cambia el valor de editState a false y borra el id de la feedback
  clearState() {
    this.editState = false;
    this.toEdit = null;
  }

  edit(event, feedback: FeedbackInterface) {
    this.editState = true;
    this.toEdit = feedback;
  }

  delete(event, feedback: FeedbackInterface) {
    this.dataApi.deletefeedback(feedback);
    this.clearState();
  }

  update(feedback: FeedbackInterface){
    this.dataApi.updatefeedback(feedback);
    this.clearState();
    }

}
