import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { TransferenciaModel } from '../models/transferencia.model';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() transferencia = new EventEmitter<any>();
  @Output() valorComErro = new EventEmitter<string>();

  valor: number;
  destino: number;

  constructor(
    private transferenciaService: TransferenciaService
  ) { }

  transferir() {
    const valorEmitir: TransferenciaModel = {
      valor: this.valor,
      destino: this.destino
    }

    this.transferenciaService
      .adicionarTransferencias(valorEmitir)
      .subscribe(resultado => {
        this.limparCampos();
    }, (error) => console.error(error));
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
