import { TransferenciaModel } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(
    private httpClient: HttpClient
  ) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia
  }

  listarTransferencias(): Observable<TransferenciaModel[]> {
    return this.httpClient.get<TransferenciaModel[]>(this.url);
  }

  adicionarTransferencias(transferencia: TransferenciaModel): Observable<TransferenciaModel> {
    this.tratarDados(transferencia);
    return this.httpClient.post<TransferenciaModel>(this.url, transferencia);
  }

  private tratarDados(transferencia: any) {
    transferencia.data = new Date();
  }

}
