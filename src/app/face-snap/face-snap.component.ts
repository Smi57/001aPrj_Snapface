import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';
import { ActivatedRoute, Router } from '@angular/router';

export const snapsInit: number = 0;


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  
  //snapsInit: number = 0;
  buttonText: string = 'Snap ?';
  buttonTextInit: string = 'Oh Snap!';
  constructor(private faceSnapsService: FaceSnapsService,
    private router: Router) { }

  ngOnInit() {
    //this.buttonText = this.buttonTextInit;
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

  onAddSnap() {
    if (this.faceSnap.snaps === snapsInit) {
      //this.faceSnap.snaps++;
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = this.buttonTextInit;
    }
    else {
      //this.faceSnap.snaps = this.snapsInit;
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
      this.buttonText = 'Oops, un snap!';
    }
  }

}

