import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormElementBaseModel } from 'src/app/utility-form/form-element-base-model';
import { TextFieldModel } from 'src/app/utility-form/templates/models/textfield-model';
import { DropdownModel } from 'src/app/utility-form/templates/models/dropdown-model';
import { TextAreaModel } from 'src/app/utility-form/templates/models/textarea-model';
import { AutocompleteModel } from 'src/app/utility-form/templates/models/autocomplete-mode';
import { ActivatedRoute } from '@angular/router';
import { UserMaintainanceService } from '../Models/Services/user-maintainance.service';
import { FormControlService } from 'src/app/utility-form/services/form-control.service';
import { RestCallService } from '../Models/Services/rest/rest-call.service';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css']
})
export class ProfileSectionComponent implements OnInit {

  profileData: FormElementBaseModel<any>[]=[];
  @Input() isLoggedinUserId: boolean;
  showForm: boolean=false;
  @ViewChild("fileChooser",{static: true}) fileChooser: ElementRef;
  @ViewChild("imagePreview", {static: true}) imagePreview: ElementRef;
  loaderUri: string;
  divNums: Array<Number>=[1,2,3,4,5,6,7,8,9,10];

  constructor(private route: ActivatedRoute, private userMaintainanceService: UserMaintainanceService,
    private formControlService: FormControlService, private restCallService: RestCallService) {
      this.loaderUri= "assets/loader.gif";
  }

  ngOnInit() {
    this.imagePreview.nativeElement.src= "assets/img_avatar.png";
    this.subscribeUserPortfolio();
  }

  subscribeUserPortfolio(){
    this.route.params.subscribe(param=>{
      this.showForm=false;
      this.profileData=[];
      this.imagePreview.nativeElement.src= this.loaderUri;
      this.restCallService.getProfileDetails(param.id)
        .subscribe(response=>{
          console.log(response);
          if(response.userImage){
            this.imagePreview.nativeElement.src= "data:image/png;base64,"+response.userImage;
          }else{
            this.imagePreview.nativeElement.src= "assets/img_avatar.png";
          }
          response.userAttr.forEach(value=>{
            this.profileData.push(this.formControlService.toFormElements(value))
          })
          this.showForm=true;
        },
        err=>{
          this.imagePreview.nativeElement.src= "assets/img_avatar.png";
        })
    })
  }

  getData(data){
    this.showForm=false;
    this.restCallService.updateUserDetails(this.route.snapshot.params.id, data.value)
      .subscribe(res=>{
        this.profileData=[];
        res.userAttr.forEach(value=>{
          this.profileData.push(this.formControlService.toFormElements(value))
          this.showForm=true;
        })
      });
  }

  openFileChooser(){
    this.fileChooser.nativeElement.click();
  }

  fileSelected(event){
    let file= event.target.files[0];

    if(FileReader && file){
      let fr= new FileReader();
      fr.onload= ()=>{
        this.imagePreview.nativeElement.src= this.loaderUri;
        let formData= new FormData();
        formData.append('file', file);
        this.restCallService.uploadUserImage(this.route.snapshot.params.id, formData)
          .subscribe(res=>{
            this.imagePreview.nativeElement.src= fr.result;
          },err=>{
            this.imagePreview.nativeElement.src= fr.result;
          });
      }
      fr.readAsDataURL(file);
    }
  }
}
