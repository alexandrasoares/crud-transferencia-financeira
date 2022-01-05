import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gerenciamento de Transações Financeiras';
  mensageErro: any;

  constructor(
    private transferenciaService: TransferenciaService
  ) {}

  transferido($event) {
    this.transferenciaService.adicionarTransferencias($event);
  }

  exibirModalErro() {
    console.log('message erro');
  }
}
