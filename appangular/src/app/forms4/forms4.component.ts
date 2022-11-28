import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-forms4',
  templateUrl: './forms4.component.html',
  styleUrls: ['./forms4.component.scss']
})
export class Forms4Component implements OnInit{
  constructor(private articleservice: ArticleService) {}

  table: any;
  ngOnInit(): void {
  }

  add( articlenokwh:string, articlerole:string, articlealamat:string, articletypeusr:string){
    this.table = {
      'nomor_kwh': articlenokwh,
      'nama_pelanggan': articlerole,
      'alamat': articlealamat,
      'type_user': articletypeusr
    
    };
    this.articleservice.addpelanggan(this.table as any).subscribe(article=>{
      this.table = article
    });
    console.log(this.table);
  }
}
