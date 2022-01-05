import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './app-nova-transferencia.component.html',
    styleUrls: ['./app-nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() transferencia = new EventEmitter<any>();
  @Output() valorComErro = new EventEmitter<string>();

  valor: number;
  destino: number;

  transferir() {
    if (this.ehValido()) {
      const valorEmitir = {
        valor: this.valor,
        destino: this.destino
      }
      this.transferencia.emit(valorEmitir);
    }
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0
  }

  private ehValido() {
    const valido = this.valor > 0;

    if (!valido) {
      this.valorComErro.emit('Informe um valor válido!');
    }

    return valido;
  }
}
