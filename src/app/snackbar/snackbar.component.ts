import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMsnComponent } from './snackbar-msn/snackbar-msn.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit{

  constructor( private snackbar: MatSnackBar) {}


  ngOnInit(): void {
   // this.snackbar.open('Hello People', 'Close', {
   // duration:2000
   // })
  }

  public openSnackBar() {
    const snackBar = this.snackbar.open('Hello People', 'Close', {
      duration:2000
      })

      snackBar.afterDismissed().subscribe(_ => {
        console.log('DISMISSED')
      })
  }

  public openFormComp() {
   this.snackbar.openFromComponent(SnackbarMsnComponent, {
      data:'Hello People',
      duration:25000,
      horizontalPosition: 'center',
      verticalPosition:'bottom',
      })

    }

}
