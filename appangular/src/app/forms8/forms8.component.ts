import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';


@Component({
  selector: 'app-forms8',
  templateUrl: './forms8.component.html',
  styleUrls: ['./forms8.component.scss']
})
export class Forms8Component implements OnInit{
  constructor(private articleservice: ArticleService) {}

  table: any;
  ngOnInit(): void {
  }

  add( articleidpelanggan:string, articlebulan:string, articletahun:string, articlemeterawal:string, articlemeterakhir:string){
    this.table = {
      'id_pelanggan': articleidpelanggan,
      'bulan': articlebulan,
      'tahun': articletahun,
      'meter_awal': articlemeterawal,
      'meter_akhir': articlemeterakhir
    
    };
    this.articleservice.addpenggunaan(this.table as any).subscribe(article=>{
      this.table = article
    });
    console.log(this.table);
  }
}
