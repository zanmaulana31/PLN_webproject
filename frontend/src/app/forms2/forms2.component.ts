import { Component,OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styleUrls: ['./forms2.component.scss']
})
export class Forms2Component implements OnInit{

  constructor(private articleservice: ArticleService) {}

  table: any;
  ngOnInit(): void {
  }

  add( articledaya:string, articletarifperkwh:string){
    this.table = {
      'daya': articledaya,
      'tarifperkwh': articletarifperkwh
    };
    this.articleservice.addtarif(this.table as any).subscribe(article=>{
      this.table = article
    });
    console.log(this.table);
  }

}
