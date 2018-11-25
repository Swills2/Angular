import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class authorsComponent implements OnInit {
  authors = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.allAuthor();
  }

  allAuthor(){
    let observable = this._httpService.allAuthor();
    observable.subscribe((data:any) =>{
      this.authors = data;
      console.log(data);
    })
  }

  deleteA(aId){
    let observable = this._httpService.deleteA(aId);
    observable.subscribe((data:any)=>{
      if(data.errors){
        alert("Failed to Delete!");
      }else{
        alert("You have successfully deleted an author!");
        this.authors = data;
      }
      
    })
  }


}