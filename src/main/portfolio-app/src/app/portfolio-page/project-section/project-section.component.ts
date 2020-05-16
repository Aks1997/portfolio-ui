import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestCallService } from '../Models/Services/rest/rest-call.service';
import { Project } from '../Models/Project';
import { FormControlService } from 'src/app/utility-form/services/form-control.service';
import { FormElementBaseModel } from 'src/app/utility-form/form-element-base-model';
import { TextFieldModel } from 'src/app/utility-form/templates/models/textfield-model';
import { TextAreaModel } from 'src/app/utility-form/templates/models/textarea-model';
import { SnackbarHandlerService } from 'src/app/utilities/snackbar/snackbar-handler.service';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectSectionComponent implements OnInit {

  images: Array<string>;

  @ViewChild("fileChooser", {static: false}) fileChooser: ElementRef;
  @Input() isLoggedinUserId: boolean;
  showProjects: boolean=false;
  projects: Project[]=[];
  selectedProjectIndex: number;
  showImageDeleteTip: boolean=false;

  constructor(private route: ActivatedRoute, private restCallService: RestCallService,
    private formControlService: FormControlService, private snackbarHandlerService: SnackbarHandlerService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.restCallService.getProjectsByUserId(param.id)
        .subscribe(res=>{
          res.forEach(element=>{
            this.createProjectObject(element);
          })
          if(res.length>0){
            this.showProjects=true;
            this.selectedProjectIndex=0;
          }
        },err=>{
          console.log(err)
        });
    })
  }

  createProjectObject(element){
    let images= element.Images ? element.Images : [];
    for(let index=0;index<images.length;index++){
      images[index].imageContent="data:image/png;base64,"+images[index].imageContent;
    }
    let attrs=[];
    if(element.projectAttr){
      let i=0;
      element.projectAttr.forEach(value=>{
        if(this.isLoggedinUserId || value.value!=""){
          attrs[i++]=this.formControlService.toFormElements(value);
        }
      })
    }
    this.projects.push(new Project(images, attrs, element.id));
  }

  addProjectDummy(){
    let projectAttrs=[];
    projectAttrs.push(new TextFieldModel({key: "Title", label: "Title", value: "",
      required: true, viewMode: false, type: "util-textfield"}));
    projectAttrs.push(new TextFieldModel({key: "Link", label: "Link", value: "",
      required: false, viewMode: false, type: "util-textfield", isLink: true}));
    projectAttrs.push(new TextAreaModel({key: "Description", label: "Description", value: "",
      required: true, viewMode: false, type: "util-textarea"}));
    let images:[]=[];
    this.projects.push(new Project(images, projectAttrs));
    this.showProjects=true;
    this.selectedProjectIndex= this.projects.length-1;
  }

  deleteProject(){
    if(this.projects[this.selectedProjectIndex].id){
      this.restCallService.deleteProject(this.route.snapshot.params.id, this.projects[this.selectedProjectIndex].id)
      .subscribe(res=>{
        if(res.results){
          this.snackbarHandlerService.openSnackBar("Project successfully deleted");
          this.spliceProject();
        }else{
          this.snackbarHandlerService.openSnackBar("Error occurred while deleting");
        }
      },err=>{
        this.snackbarHandlerService.openSnackBar("Error occurred while deleting");
      });
    }else{
      this.spliceProject();
    }
  }

  spliceProject(){
    this.projects.splice(this.selectedProjectIndex);
    if(this.selectedProjectIndex>0){
      this.selectedProjectIndex--;
    }else if(this.projects.length>0){
      this.selectedProjectIndex=0;
    }else{
      this.showProjects=false;
    }
  }

  getData(data){
    this.restCallService.uploadProjectDetails(this.route.snapshot.params.id, data.value,
      this.projects[this.selectedProjectIndex].id)
      .subscribe(res=>{
        this.updateProject(this.selectedProjectIndex, res);
      },err=>{
        console.log(err);
      })
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
      formData, this.projects[this.selectedProjectIndex].id)
      .subscribe(res=>{
        this.updateProject(this.selectedProjectIndex, res);
      },err=>{
        console.log(err);
      })
  }

  updateProject(index, data){
    if(index>=0 && index<this.projects.length){
      let images=data.Images ? data.Images : [];
      for(let i=0;i<images.length;i++){
        images[i].imageContent="data:image/png;base64,"+images[i].imageContent;
      }

      let attrs=[];
      if(data.projectAttr){
        attrs= data.projectAttr.map(value=>{
          return this.formControlService.toFormElements(value);
        })
      }
      
      this.projects.splice(index, 1, new Project(images, attrs, data.id));
    }
  }

  mouseHoverEvent(event){
    if(event>=0){
      this.showImageDeleteTip= true;
    }else{
      this.showImageDeleteTip=false;
    }
  }

  imageClicked(event){
    if(this.projects[this.selectedProjectIndex].images.length>event && 
      this.projects[this.selectedProjectIndex].images[event]["imagePath"] &&
      this.projects[this.selectedProjectIndex].id){
        this.restCallService.deleteProjectImages(this.route.snapshot.params.id, 
          this.projects[this.selectedProjectIndex].id, 
          this.projects[this.selectedProjectIndex].images[event])
          .subscribe(res=>{
            console.log(res);
          },err=>{
            console.log(err)
          });
      }
  }  
}

