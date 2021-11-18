import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info={
    nom : "Bah",
    email : "bousra773@gmail.com",
    tel : 77388
  };
  comments =[
    {date:new Date() , message:"A"},
    {date:new Date (),message:"B"}
  ];
  commentaire={date:null,message:""};
  // tslint:disable-next-line:no-empty
  constructor() { }
  // tslint:disable-next-line:no-empty
  ngOnInit(): void {
  }
  onAddCommentaire(){

    // @ts-ignore
    this.commentaire.date=new Date();

    // @ts-ignore
    this.comments.push(this.commentaire);
  }

}
