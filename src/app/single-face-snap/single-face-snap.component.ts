import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';
import { snapsInit } from '../face-snap/face-snap.component';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  buttonText: string = 'Snap ?';
  buttonTextInit: string = 'Oh Snap!';
  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) { }
    
  ngOnInit() {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
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
