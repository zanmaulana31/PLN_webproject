import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-forms5',
  templateUrl: './forms5.component.html',
  styleUrls: ['./forms5.component.scss']
})
export class Forms5Component implements OnInit{
  constructor(private articleservice: ArticleService) {}

  table: any;
  ngOnInit(): void {
  }

  add( articleusernameteknisi:string, articlepasswordteknisi:string, articlenama_admin_teknisi:string, articletypeusr:string){
    this.table = {
      'username': articleusernameteknisi,
      'password': articlepasswordteknisi,
      'nama_admin': articlenama_admin_teknisi,
      'type_user': articletypeusr
    
    };
    this.articleservice.addadmin(this.table as any).subscribe(article=>{
      this.table = article
    });
    console.log(this.table);
  }
}
