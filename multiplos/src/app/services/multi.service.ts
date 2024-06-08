import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Result } from '../interface/result.interface';

@Injectable({
  providedIn: 'root'
})
export class MultiplesService {
  constructor(private firestore: AngularFirestore) {}

  saveData(data: Result): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('results').doc(id).set(data);
  }


}
