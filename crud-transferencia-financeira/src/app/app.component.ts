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
    this.valoresTransferidos.push($event);
  }

  exibirModalErro() {
    console.log('message erro');
  }
}
