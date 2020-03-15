import { BookInterface } from './../models/books';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AdviceInterface } from '../models/advice';
import { BenefitInterface } from '../models/benefit';
import { BronzeInterface } from '../models/bronze';
import { ExcuseInterface } from '../models/excuse';
import { FeedbackInterface } from '../models/feedback';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private booksCollection: AngularFirestoreCollection<BookInterface>;
  private books: Observable<BookInterface[]>;
  private bookDoc: AngularFirestoreDocument<BookInterface>;

  private advicesCollection: AngularFirestoreCollection<AdviceInterface>;
  private advices: Observable<AdviceInterface[]>;
  private adviceDoc: AngularFirestoreDocument<AdviceInterface>;

  private benefitsCollection: AngularFirestoreCollection<BenefitInterface>;
  private benefits: Observable<BenefitInterface[]>;
  private benefitDoc: AngularFirestoreDocument<BenefitInterface>;

  private bronzesCollection: AngularFirestoreCollection<BronzeInterface>;
  private bronzes: Observable<BronzeInterface[]>;
  private bronzeDoc: AngularFirestoreDocument<BronzeInterface>;

  private excusesCollection: AngularFirestoreCollection<ExcuseInterface>;
  private excuses: Observable<ExcuseInterface[]>;
  private excuseDoc: AngularFirestoreDocument<ExcuseInterface>;

  private feedbacksCollection: AngularFirestoreCollection<FeedbackInterface>;
  private feedbacks: Observable<FeedbackInterface[]>;
  private feedbackDoc: AngularFirestoreDocument<FeedbackInterface>;


  constructor(private firebasedb: AngularFireDatabase, private firestore: AngularFirestore) {
    this.advicesCollection = firestore.collection<AdviceInterface>('advices', ref => ref.orderBy('ts', 'desc'));
    this.advices = this.advicesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as AdviceInterface;
        const id = action.payload.doc.id;
        return {id, ...data };
      });
    }));

    this.benefitsCollection = firestore.collection<BenefitInterface>('benefits', ref => ref.orderBy('ts', 'desc'));
    this.benefits = this.benefitsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as BenefitInterface;
        const id = action.payload.doc.id;
        return {id, ...data };
      });
    }));

    this.bronzesCollection = firestore.collection<BronzeInterface>('bronzes', ref => ref.orderBy('ts', 'desc'));
    this.bronzes = this.bronzesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as BronzeInterface;
        const id = action.payload.doc.id;
        return {id, ...data };
      });
    }));

    this.excusesCollection = firestore.collection<ExcuseInterface>('excuses', ref => ref.orderBy('ts', 'desc'));
    this.excuses = this.excusesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as ExcuseInterface;
        const id = action.payload.doc.id;
        return {id, ...data };
      });
    }));

    this.feedbacksCollection = firestore.collection<FeedbackInterface>('feedbacks', ref => ref.orderBy('ts', 'desc'));
    this.feedbacks = this.feedbacksCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as FeedbackInterface;
        const id = action.payload.doc.id;
        return {id, ...data };
      });
    }));



   }

  // Books
  getAllBooks() {
    return this.books = this.booksCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as BookInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  addBook(book: BookInterface) {
    this.booksCollection.add(book);
  }

  updateBook() {

  }

  deleteBook() {

  }

  // Coins
  getCoins() {
    //return this.CoinList = this.firebasedb.list('enercoin');
  }

  addCoins() {

  }

  updateCoin(coin) {

  }

  deleteCoin() {

  }

  // advices
  getAlladvices() {
    return this.advices = this.advicesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as AdviceInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getAdvices(){
    return this.advices;
  }

  addadvice(advice: AdviceInterface) {
    this.advicesCollection.add(advice);
  }

  updateadvice(advice: AdviceInterface) {
    this.adviceDoc = this.firestore.doc(`advices/${advice.id}`);
    this.adviceDoc.update(advice);
  }

  deleteadvice(advice: AdviceInterface) {
    this.adviceDoc = this.firestore.doc(`advices/${advice.id}`);
    this.adviceDoc.delete();
  }

  // benefits
  getAllbenefits() {
    return this.benefits = this.benefitsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as BenefitInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  addbenefit(benefit: BenefitInterface) {
    this.benefitsCollection.add(benefit);
  }

  updatebenefit(benefit: BenefitInterface) {
    this.benefitDoc = this.firestore.doc(`benefits/${benefit.id}`);
    this.benefitDoc.update(benefit);
  }

  deletebenefit(benefit: BenefitInterface) {
    this.benefitDoc = this.firestore.doc(`benefits/${benefit.id}`);
    this.benefitDoc.delete();
  }

  // bronzes
  getAllbronzes() {
    return this.bronzes = this.bronzesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as BronzeInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  addbronze(bronze: BronzeInterface) {
    this.bronzesCollection.add(bronze);
  }

  updatebronze(bronze: BronzeInterface) {
    this.bronzeDoc = this.firestore.doc(`bronzes/${bronze.id}`);
    this.bronzeDoc.update(bronze);
  }

  deletebronze(bronze: BronzeInterface) {
    this.bronzeDoc = this.firestore.doc(`bronzes/${bronze.id}`);
    this.bronzeDoc.delete();
  }

  // excuses
  getAllexcuses() {
    return this.excuses = this.excusesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as ExcuseInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getExcuses(){
    return this.excuses;
  }

  addexcuse(excuse: ExcuseInterface) {
    this.excusesCollection.add(excuse);
  }

  updateexcuse(excuse: ExcuseInterface) {
    this.excuseDoc = this.firestore.doc(`excuses/${excuse.id}`);
    this.excuseDoc.update(excuse);
  }

  deleteexcuse(excuse: ExcuseInterface) {
    this.excuseDoc = this.firestore.doc(`excuses/${excuse.id}`);
    this.excuseDoc.delete();
  }

  // feedbacks
  getAllfeedbacks() {
    return this.feedbacks = this.feedbacksCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as FeedbackInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  addfeedback(feedback: FeedbackInterface) {
    this.feedbacksCollection.add(feedback);
  }

  updatefeedback(feedback: FeedbackInterface) {
    this.feedbackDoc = this.firestore.doc(`feedbacks/${feedback.id}`);
    this.feedbackDoc.update(feedback);
  }

  deletefeedback(feedback: FeedbackInterface) {
    this.feedbackDoc = this.firestore.doc(`feedbacks/${feedback.id}`);
    this.feedbackDoc.delete();
  }
}
