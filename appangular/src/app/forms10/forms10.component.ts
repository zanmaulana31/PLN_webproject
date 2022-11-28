import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-forms10',
  templateUrl: './forms10.component.html',
  styleUrls: ['./forms10.component.scss']
})
export class Forms10Component implements OnInit{

  constructor(private articleservice: ArticleService) {}

  table: any;
  ngOnInit(): void {
  }

  add( articleidpenggunaan:string, articleidtarif:string, articleiddenda:string, articletgltagihan:string, articlejmldayapakai:string, articleidadmin:string){
    this.table = {
      'id_tagihan': articleidpenggunaan,
      'tanggal_pembayaran': articleidtarif,
      'bulan_bayar': articleiddenda,
      'biaya_admin': articletgltagihan,
      'total_bayar': articlejmldayapakai,
      'id_admin': articleidadmin
    };
    this.articleservice.addpembayaran(this.table as any).subscribe(article=>{
      this.table = article
    });
    console.log(this.table);
  }
}
