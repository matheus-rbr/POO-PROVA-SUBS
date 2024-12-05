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
  data_Resgate: string = '';
  resultado: number | null = null;

  calcularRendimento() {
    const taxaMensal = 0.009;
    const hoje = new Date();
    const data_Resgate = new Date(this.data_Resgate);
    
    const diferencaMeses = (data_Resgate.getFullYear() - hoje.getFullYear()) * 12 + (data_Resgate.getMonth() - hoje.getMonth());

    if (diferencaMeses > 0 && this.valor > 0) {
      let montante = 0; 

      for (let i = 0; i < diferencaMeses; i++) {
        montante += this.valor;
        montante *= (1 + taxaMensal); 
      }

      this.resultado = montante;
    } else {
      this.resultado = null;
      alert('Insira um valor financeiro válido e uma data de resgate futuro!');
    }
  }
}