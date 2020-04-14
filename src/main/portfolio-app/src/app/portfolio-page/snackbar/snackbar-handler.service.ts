import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarHandlerService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, action?: string, classes?: Array<string>){
    this.snackBar.open(message, action,{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: classes
    })
  }
}
