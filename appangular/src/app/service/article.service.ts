import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url:string ="http://127.0.0.1:8000"; 
  constructor(private http: HttpClient) { }

  datas(){
    return this.http.get<any>(this.url+ '/table1');
  }

  adddata(table:any): Observable<any>{
    return this.http.post<any>(this.url+ '/table1/tambah', table);

  }

  datatarif(){
    return this.http.get<any>(this.url+ '/tarif');
  }

  addtarif(table:any): Observable<any>{
    return this.http.post<any>(this.url+ '/tarif/tambah', table);

  }

  datapelanggan(){
    return this.http.get<any>(this.url+ '/pelanggan');
  }

  addpelanggan(table:any): Observable<any>{
    return this.http.post<any>(this.url+ '/pelanggan/tambah', table);

  }

  addteknisi(table:any): Observable<any>{
    return this.http.post<any>(this.url+ '/teknisi/tambah', table);

  }

  addadmin(table:any): Observable<any>{
    return this.http.post<any>(this.url+ '/admin/tambah', table);

  }

  adddenda(table:any): Observable<any>{
    return this.http.post<any>(this.url+ '/denda/tambah', table);

  }

  addpenggunaan(table:any): Observable<any>{
    return this.http.post<any>(this.url+ '/penggunaan/tambah', table);

  }

  addtagihan(table:any): Observable<any>{
    return this.http.post<any>(this.url+ '/tagihan/tambah', table);

  }

  addpembayaran(table:any): Observable<any>{
    return this.http.post<any>(this.url+ '/pembayaran/tambah', table);

  }


}
