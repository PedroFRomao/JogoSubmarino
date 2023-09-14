var canvas, ctx, ALTURA, LARGURA, velocidade=9, estadoAtual

let estados ={
	jogar:0,
	jogando:1,
	perdeu:2
}

function criaCanvas()
{
	canvas = document.criaElement("canvas")
	canvas.width = LARGURA
	canvas.height= ALTURA
	ctx = canvas.getContext("2d")
	document.body.appendChild(canvas)
}

function main()
{
	LARGURA = window.innerWidth
	ALTURA = window.innerHeight
	criaCanvas()
	estadoAtual = estados.jogar
}

function atualiza()
{
	submarino.atualiza()
	if(estadoAtual == estados.jogando) {
		obstaculos.atualiza()
		score.alteraVelocidade()
	}
}

function desenha()
{
	bg.desenha(0,0)
	score.desenha()
    if(estadoAtual == estados.jogar){
		inicio.desenha(LARGURA/2 - (inicio.largura/2), ALTURA/2 - (inicio.altura/2))
	}
	else if(estadoAtual == estados.perdeu){
		spriteGameover.desenha(LARGURA/2 - (spriteGameover.largura/2), ALTURA/2 - (spriteGameover.altura/2))
		score.translate()
	}
	else if(estadoAtual == estados.jogando){
		obstaculos.desenha()
	}

	chao.desenha()
	submarino.desenha()
}
main()