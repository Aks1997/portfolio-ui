import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { Project } from '../../Models/Project';
import { RestCallService } from '../../Models/Services/rest/rest-call.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-template',
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.css']
})
export class ProjectTemplateComponent implements OnInit,OnChanges {

  @Input() project: Project;
  @Input() index: number;
  @Input() isLoggedinUserId: boolean;
  @Output() updateProjectEvent= new EventEmitter<Object>();
  @Output() deleteProjectEvent= new EventEmitter<number>();
  @ViewChild("fileChooser", {static: false}) fileChooser: ElementRef;
  showImageDeleteTip: boolean=false;
  showForm: boolean=true;

  constructor(private restCallService: RestCallService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.showForm=false;
    setTimeout(()=>{
      this.showForm=true;
    },500);
  }

  mouseHoverEvent(event){
    if(event>=0){
      this.showImageDeleteTip= true;
    }else{
      this.showImageDeleteTip=false;
    }
  }

  imageClicked(event){
    if(this.project.images.length>event && 
      this.project.images[event]["imagePath"] &&
      this.project.id){
        let userResponse= confirm("Do you really want to delete?");
        if(userResponse){
          this.restCallService.deleteProjectImages(this.route.snapshot.params.id, 
            this.project.id, 
            this.project.images[event])
            .subscribe(res=>{
              this.updateProjectEvent.emit({index: this.index, value: res});
            },err=>{
              console.log(err);
            });
        }
    }
  }  

  getData(data){
    this.restCallService.uploadProjectDetails(this.route.snapshot.params.id, data.value,
      this.project.id)
      .subscribe(res=>{
        this.updateProjectEvent.emit({index: this.index, value: res});
      },err=>{
        console.log(err);
      })
  }

  deleteProject(){
    this.deleteProjectEvent.emit(this.index);
  }

  triggerFileSelector(){
    this.fileChooser.nativeElement.click();
  }

  fileSelected(data){
    let files= data.target.files;
    let formData= new FormData();
    for(let i=0;i<files.length;i++){
        formData.append("images", files[i]);
    }

    this.restCallService.uploadProjectImages(this.route.snapshot.params.id, 
      formData, this.project.id)
      .subscribe(res=>{
        this.updateProjectEvent.emit({index: this.index, value: res});
      },err=>{
        console.log(err);
      })
  }
}
