import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gerenciamento de Transações Financeiras';
  valoresTransferidos: any[] = [];
  mensageErro: any;

  transferido($event) {
    console.log($event);
    const transferencia = {... $event, data: new Date()}
    this.valoresTransferidos.push(transferencia);
  }

  exibirModalErro() {
    console.log('message erro');
  }
}
