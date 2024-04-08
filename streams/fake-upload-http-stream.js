
import fetch from 'node-fetch';
import {Readable} from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1
    
    _read() {
        const i = this.index++ //irá somar  mais um a cada chamada do método de leitura

        setTimeout(() => {
            if(i > 5){
                this.push(null) //Envia para o final da fila e fecha o stream, indica que não há mais dados pra ler
            } else {
                const buf = Buffer.from(String(i))
    
                this.push(buf)
            }
        }, 1000)
    }
}

fetch('http://localhost:3334', {
    method: 'POST',
    body: new OneToHundredStream(),
}).then(response => {
    return response.text()
}).then(data =>{
    console.log(data)
})