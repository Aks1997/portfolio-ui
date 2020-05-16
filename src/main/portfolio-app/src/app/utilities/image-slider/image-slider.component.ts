import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, OnChanges {

  @Input() images: Array<Object>;
  @Output() mouseHoverEvent= new EventEmitter<number>();
  @Output() imageClickedEvent= new EventEmitter<number>();
  selectedImage: Object;
  selectedIndex: number;
  mouseoverImg: boolean= false;

  constructor() { }

  ngOnChanges() {
    if(this.images.length==0){
      this.images.push({imageContent: "https://www.w3schools.com/html/pic_trulli.jpg"});
    }
  }

  ngOnInit() {
    if(this.images && this.images.length>0){
      this.selectedImage=this.images[0];
      this.selectedIndex=0;

      setInterval(()=>{
        if(!this.mouseoverImg){
          this.slideImage();
        }
      }, 3000);
    }else{
      this.selectedImage=""
    }
  }

  slideImage(){
    if(this.images.length>0){
      let imageArrayLength= this.images.length;
      if(this.selectedIndex>=imageArrayLength-1){
        this.selectedIndex= 0;
      }else{
        this.selectedIndex++;
      }
      this.selectedImage= this.images[this.selectedIndex];
    }
  }

  mouseEvent(value){
    this.mouseoverImg=value;
    if(this.mouseoverImg){
      this.mouseHoverEvent.emit(this.selectedIndex);
    }else{
      this.mouseHoverEvent.emit(-1);
    }
  }

  imageClicked(){
    this.imageClickedEvent.emit(this.selectedIndex);
  }
}
