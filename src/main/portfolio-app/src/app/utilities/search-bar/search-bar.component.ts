import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { RestHttpService } from 'src/app/portfolio-page/Models/Services/http/rest-http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchBarComponent implements OnInit {

  @ViewChild("searchBar", {static: true}) searchBar: ElementRef;
  @ViewChild("suggestions", {static: true}) suggestions: ElementRef;
  testSuggestions=[{id:1,value:"Cricket"}, {id:2,value:"football"}, 
    {id:3,value:"Fussball"}, {id:4,value:"Fiddler"}];
  currentFocus: number;
  inputSubject=new Subject<string>();

  constructor(private restHttpService: RestHttpService) { }

  ngOnInit() {
    this.currentFocus=-1;
    this.searchBar.nativeElement.addEventListener("input", this.autoCompleteSearch.bind(this));
    this.searchBar.nativeElement.addEventListener("keydown", this.keyDownHandler.bind(this));
    document.addEventListener("click", this.closeAllLists);

    this.inputSubject
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(name=> this.restHttpService.getSkillsSuggestions(name))
      )
      .subscribe(res=>{
        console.log(res);
      },err=>{
        console.log(err);
      })
  }

  search(value){
    this.inputSubject.next(value);
  }

  autoCompleteSearch(event){
    let value= event.target.value;
    this.closeAllLists();
    this.currentFocus=-1;
    if(!value) return false;
    let a = document.createElement("DIV");
    a.setAttribute("class", "autocomplete-div");
    a.setAttribute("id", "autocomplete-div-id");
    this.suggestions.nativeElement.appendChild(a);

    this.testSuggestions.forEach(el=>{
      if(el.value.length>=value.length && el.value.substr(0, value.length).toUpperCase()===value.toUpperCase()){
        let b= document.createElement("DIV");
        b.innerHTML= "<strong>"+ el.value.substr(0, value.length)+"</strong>";
        b.innerHTML+=el.value.substr(value.length);
        b.setAttribute("class", "autocomplete-item");
        b.setAttribute("id", el.id+"autocomplete-item");
        b.addEventListener("click", (e) =>{
          this.searchBar.nativeElement.value = el.value;
          this.closeAllLists();
      });
        a.appendChild(b);
      }
    })
  }

  keyDownHandler(e){
    let x = document.getElementById("autocomplete-div-id");
    let listItems;
    if (x) {
      listItems = x.getElementsByTagName("div");
    }

    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      this.currentFocus++;
      /*and and make the current item more visible:*/
      this.addActive(listItems);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      this.currentFocus--;
      /*and and make the current item more visible:*/
      this.addActive(listItems);
    } else if (e.keyCode == 13) {
      if (this.currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (listItems) listItems[this.currentFocus].click();
      }
    }
  }

  addActive(items){
    /*a function to classify an item as "active":*/
    if (!items) return false;
    /*start by removing the "active" class on all items:*/
    this.removeActive(items);
    if (this.currentFocus >= items.length) this.currentFocus = 0;
    if (this.currentFocus < 0) this.currentFocus = (items.length - 1);
    /*add class "autocomplete-active":*/
    items[this.currentFocus].classList.add("autocomplete-active");
  }

  removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  closeAllLists(){
    var x = document.getElementsByClassName("autocomplete-div");
    for (var i = 0; i < x.length; i++) {
        x[i].parentNode.removeChild(x[i]);
    }
  }
}
