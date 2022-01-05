import { TransferenciaModel } from './../models/transferencia.model';
import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  valoresTransferidos: any[];

  constructor(
    private transferenciaService: TransferenciaService
  ) { }

  ngOnInit(): void {
    this.transferenciaService
    .listarTransferencias()
    .subscribe((transferencias: TransferenciaModel[]) => {
      console.table(transferencias);
      this.valoresTransferidos = transferencias;
    })
  }

}
