import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-investimento',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css']
})
export class InvestimentoComponent {
  valor: number = 0;
  meses: number = 0;
  resultado: number | null = null;

  calcularPrestacao() {
    const taxaMensal = 0.019; 

    if (this.meses > 0 && this.valor > 0) {
      const prestacao = 
        (this.valor * taxaMensal) /
        (1 - Math.pow(1 + taxaMensal, -this.meses));

      this.resultado = prestacao;
    } else {
      this.resultado = null;
      alert('Insira um valor e uma quantidade de meses válidos!');
    }
  }
}
