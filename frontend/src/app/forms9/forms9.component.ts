import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';


@Component({
  selector: 'app-forms9',
  templateUrl: './forms9.component.html',
  styleUrls: ['./forms9.component.scss']
})
export class Forms9Component implements OnInit{
  constructor(private articleservice: ArticleService) {}

  table: any;
  ngOnInit(): void {
  }

  add( articleidpenggunaan:string, articleidtarif:string, articleiddenda:string, articletgltagihan:string, articlejmldayapakai:string, articlestatus:string){
    this.table = {
      'id_penggunaan': articleidpenggunaan,
      'id_tarif': articleidtarif,
      'id_denda': articleiddenda,
      'tanggal_tagihan': articletgltagihan,
      'jml_daya_terpakai': articlejmldayapakai,
      'status': articlestatus
    };
    this.articleservice.addtagihan(this.table as any).subscribe(article=>{
      this.table = article
    });
    console.log(this.table);
  }
}
