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

  @Input() isLoggedinUserId: boolean;
  showProjects: boolean=false;
  projects: Project[]=[];
  projectsTotalCount: number=0;
  downIcon:string;
  upIcon:string;
  currentIndex: number=0;
  dummyCounts:number=0;
  animateProject: boolean=true;

  constructor(private route: ActivatedRoute, private restCallService: RestCallService,
    private formControlService: FormControlService, private snackbarHandlerService: SnackbarHandlerService) {
    this.downIcon="assets/down.png";
    this.upIcon="assets/up.png";
  }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.restCallService.getProjectsByUserId(param.id, 0, 5)
        .subscribe(res=>{
          let pr= res.projects;
          pr.forEach(element=>{
            this.createProjectObject(element);
          })
          if(pr.length>0){
            this.showProjects=true;
            this.projectsTotalCount= res.count;
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
      required: false, viewMode: false, type: "util-textfield"}));
    projectAttrs.push(new TextFieldModel({key: "Link", label: "Link", value: "",
      required: false, viewMode: false, type: "util-textfield", isLink: true}));
    projectAttrs.push(new TextAreaModel({key: "Description", label: "Description", value: "",
      required: false, viewMode: false, type: "util-textarea"}));
    let images:[]=[];
    let newProject= new Project(images, projectAttrs);
    this.projects.splice(0, 0 , newProject);
    this.showProjects=true;
    this.projectsTotalCount++;
    this.currentIndex= 0;
    this.dummyCounts++;
  }

  deleteProject(index){
    if(this.projects[index].id){
      this.restCallService.deleteProject(this.route.snapshot.params.id, this.projects[index].id)
      .subscribe(res=>{
        if(res.results){
          this.snackbarHandlerService.openSnackBar("Project successfully deleted");
          this.spliceProject(index);
        }else{
          this.snackbarHandlerService.openSnackBar("Error occurred while deleting");
        }
      },err=>{
        this.snackbarHandlerService.openSnackBar("Error occurred while deleting");
      });
    }else{
      this.spliceProject(index);
      this.dummyCounts--;
    }
  }

  spliceProject(index){
    this.projects.splice(index,1);
    if(this.projects.length<=0){
      this.showProjects=false;
    }
    this.projectsTotalCount--;
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

  updateProjectListener(data){
    if(this.projects[data.index].id==null){
      this.dummyCounts--;
    }
    this.updateProject(data.index, data.value);
  }

  pageChangedListener(index){
    if(this.projectsTotalCount>index){
      if(this.projects.length-1<index){
        let chunk=5;
        if(index>=this.projects.length-this.dummyCounts+chunk){
          chunk= index+1-this.projects.length+this.dummyCounts;
        }
        this.restCallService.getProjectsByUserId(this.route.snapshot.params.id, this.projects.length-this.dummyCounts,
                chunk)
                .subscribe(res=>{
                  let pr= res.projects;
                  pr.forEach(element=>{
                    this.createProjectObject(element);
                    this.currentIndex=index;
                    this.animateProject=true;
                    setTimeout(()=>{
                      this.animateProject=false;
                    },1000);
                  })
                },err=>{
        
                })
      }else{
        this.currentIndex=index;
        this.animateProject=true;
        setTimeout(()=>{
          this.animateProject=false;
        },1000);
      }
    }
  }
}

