import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  constructor(private articleService: ArticleService) {}

  table: any;

  ngOnInit(): void{
    this.showdata();
  }
  
  showdata(){
    this.table = this.articleService.datapelanggan().subscribe(article=>{
      this.table = article;
      console.log(this.table);
    })
  }
}
