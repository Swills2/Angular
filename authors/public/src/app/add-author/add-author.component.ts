import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  newA = {name:''};

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  createA(){
    let observable = this._httpService.createA(this.newA);
    observable.subscribe((data:any)=>{
      this.newA = {name:''};
      if(data.errors){
        alert(data.message);
      }else{
        alert("You have successfully created a new Author!");
        this._router.navigate(['allAuthors']);
      }
    })
  }

}
