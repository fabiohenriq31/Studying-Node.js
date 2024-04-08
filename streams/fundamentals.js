//process.stdin // tudo que eu estou recebendo como entrada
   // .pipe(process.stdout) // eu estou encaminhando com o "pipe" para uma saida o stdout é uma stream de saida.


import { Readable, Writable, Transform } from 'node:stream';

class OneToHundredStream extends Readable {
    index = 1
    
    _read() {
        const i = this.index++ //irá somar  mais um a cada chamada do método de leitura

        setTimeout(() => {
            if(i > 100){
                this.push(null) //Envia para o final da fila e fecha o stream, indica que não há mais dados pra ler
            } else {
                const buf = Buffer.from(String(i))
    
                this.push(buf)
            }
        }, 1000)
    }
}

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))
    }
}

class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback) { 
        console.log(Number(chunk.toString()) *10)
        callback()
    }
}

new OneToHundredStream()
   // .pipe(process.stdout)//o stdout é o console, ele vai mostrar na tela os dados que forem passando pelo pipe
   .pipe(new InverseNumberStream()) 
   .pipe(new MultiplyByTenStream())