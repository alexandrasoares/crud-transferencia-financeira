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
    this.valoresTransferidos = this.transferenciaService.transferencias;
  }

}
