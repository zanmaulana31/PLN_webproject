import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{

  constructor(private articleservice: ArticleService) {}

  table: any;
  ngOnInit(): void {
  }

  add( articletipeuser:string, articlerole:string){
    this.table = {
      'typeuser': articletipeuser,
      'role': articlerole,

    
    };
    this.articleservice.adddata(this.table as any).subscribe(article=>{
      this.table = article
    });
    console.log(this.table);
  }


}
