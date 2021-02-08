import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.css']
})
export class PageNavigatorComponent implements OnInit, OnChanges {

  @Input() pagesCount: number;
  @Input() currentPage: number;
  @Output() pageIndexEmitter= new EventEmitter<number>();
  pages: Array<number>;

  constructor() { }

  ngOnChanges() {
    this.pages= [...Array(this.pagesCount).keys()]
  }

  ngOnInit() {

  }

  prevClicked(){
    if(this.currentPage>0){
      this.pageIndexEmitter.emit(this.currentPage-1);
    }
  }

  nextClicked(){
    if(this.currentPage<this.pagesCount-1){
      this.pageIndexEmitter.emit(this.currentPage+1);
    }
  }

  linkClicked(i){
    if(this.currentPage!=i){
      this.pageIndexEmitter.emit(i);
    }
  }
}
