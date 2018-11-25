import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  editA = {name:''};

  constructor(private _httpService: HttpService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.findA()
  }

  findA(){
    this._activatedRoute.params.subscribe((author)=>{
      var aId = author['aId'];
      let observable = this._httpService.findA(aId);
      observable.subscribe((data:any)=>{
        this.editA = data;
      })
    })
  }

  updateA(){
    this._activatedRoute.params.subscribe((messageId) =>{
      var aId = messageId['aId'];
      let observable = this._httpService.updateA(this.editA,aId);
      observable.subscribe((data:any)=>{
        console.log(data);
        if(data.errors){
          alert(data.message);
          this.findA();
        }else{
          alert("You have successfully updated the Author!");
          this._router.navigate(['allAuthors']);
        }
      })
    })
    
  }
}
