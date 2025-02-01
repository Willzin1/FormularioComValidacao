class ValidarCPF{
    constructor(cpfEnviado) { 
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });     
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
    
    criaNovoCPF() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidarCPF.criaDigito(cpfParcial);
        const digito2 = ValidarCPF.criaDigito(cpfParcial + digito1);
        this.NovoCPF = cpfParcial + digito1 + digito2;

    }

    static criaDigito(cpfSemDigitos) {
        let total = 0;
        let regressivo = cpfSemDigitos.length + 1;
        
        for(let stringNumerica of cpfSemDigitos){
            total += regressivo * Number(stringNumerica);
            regressivo--;
        }

        const digito = 11 - (total % 11);
        return digito > 9? '0' : String(digito);
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        this.criaNovoCPF();
        
        return this.NovoCPF === this.cpfLimpo;
    }
}
