import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';
import { snapsInit } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent {

  @Input() faceSnap!: FaceSnap;

  //snapsInit: number = 0;
  buttonText: string = 'Snap ?';
  buttonTextInit: string = 'Oh Snap!';
  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit() {
    //this.buttonText = this.buttonTextInit;
  }

  onAddSnap() {
    if (this.faceSnap.snaps === snapsInit) {
      //this.faceSnap.snaps++;
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = this.buttonTextInit;
    }
    else {
      //this.faceSnap.snaps = this.snapsInit;
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oops, un snap!';
    }
  }

}
