import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia
  }

  adicionarTransferencias(transferencia: any) {
    this.tratarDados(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private tratarDados(transferencia: any) {
    transferencia.data = new Date();
  }

}
