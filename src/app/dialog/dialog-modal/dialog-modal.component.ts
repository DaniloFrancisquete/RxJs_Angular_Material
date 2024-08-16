import { Component, OnInit } from '@angular/core';
import {  MatDialogRef, } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent implements OnInit{

  constructor(public martDialogRef: MatDialogRef<DialogModalComponent>){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public closeDialog() {
    this.martDialogRef.close();
  }

}
