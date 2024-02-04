function status(carroligado) {
    if (carroligado.ligado === true) {
        console.log(`Carro ligado. Velocidade: ${carroligado.velocidade}`)
    } else {
        console.log(`Carro desligado. Velocidade: ${carroligado.velocidade}`)
    }
}


const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado) {
            console.log(`Este carro já está ligaddo`)
        } else {
            this.ligado = true;
            status(carro)
        }
    },
    desligar: function () {
        if (!this.ligado) {
            console.log(`Este carro já esta desligado`)
        } else {
            this.ligado = false
            this.velocidade = 0
            status(carro)

        }
    },
    acelerar: function () {
        if (!this.ligado) {
            console.log(`Não é posiivel acelerar um carro desligado`)
        } else {
            this.velocidade += 10
            status(carro)
        }
    },
    desacelerar: function () {
        if (!this.ligado) {
            console.log(`Não é possivel desacelerar um carro desligado`)
        } else {
            this.velocidade -= 10
            status(carro)
        }

    }

}

carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()





