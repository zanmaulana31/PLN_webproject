import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-forms7',
  templateUrl: './forms7.component.html',
  styleUrls: ['./forms7.component.scss']
})
export class Forms7Component implements OnInit{
  constructor(private articleservice: ArticleService) {}

  table: any;
  ngOnInit(): void {
  }

  add( articlejumlahdenda:string){
    this.table = {
      'jumlah_denda': articlejumlahdenda
    
    };
    this.articleservice.adddenda(this.table as any).subscribe(article=>{
      this.table = article
    });
    console.log(this.table);
  }

}
