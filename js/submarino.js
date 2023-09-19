submarino = {
	x:0,
	y:0,
	altura:spriteSubmarino.altura,
	largura:spriteSubmarino.largura,

	atualiza: function () {
		// Atualiza a posição vertical do personagem com base na posição do mouse
		this.y = mouseY- this.altura / 2;
	
		// Mantém o personagem dentro dos limites da tela
		this.y = Math.max(0, Math.min(ALTURA - this.altura, this.y));
	
		// Atualiza a animação do sprite
		if (estadoAtual == estados.jogando) {
		
		}
	
		// Verifica colisão com os obstáculos
		for (var i = 0, tam = tubaroes._obs.length; i < tam; i++) {
			var obs = tubaroes._obs[i];
	
			// Calcula as coordenadas da colisão entre os quadrados
			colisaoX = this.x;
			colisaoY = this.y;
	
			// Verifica se houve colisão com base nas dimensões dos quadrados
			if ( colisaoX > obs.x && colisaoX < obs.x + spriteTubarao.largura && colisaoY > obs.altura && colisaoY < obs.altura + spriteTubarao.altura) // Altura da colisão) 
			{
				estadoAtual = estados.perdeu;
				this.reset();
				tubaroes.limpa();
				// O contador de pontos só é zerado quando o jogo começa
				if (estadoAtual == estados.jogar) {
					score.value = 0;
				}
				break; // Saia do loop assim que uma colisão for detectada
			}
		}
	},	
	
	/*
		sempre que trocaSprite é 0 incrementamos o indexBoneco
		assim de tempo em tempo a sprite é trocada.
	*/
	animateSprite:function(){
		/*if( this.trocaSprite==0 )
		{
			//se indexBoneco for maior que o total de sprites dentro do array, ele volta ser 0
			( this.indexBoneco >= spriteSubmarino.length-1 ) ? this.indexBoneco=0 : this.indexBoneco++	
			this.trocaSprite=5
		}
		else 
			this.trocaSprite--*/
	},

	cair:function(){

	},

	desenha:function () {
		// Desenha o sprite do submarino
		//ctx.fillStyle = "green";
		//ctx.fillRect(this.x, this.y,  this.x + spriteSubmarino.largura, this.y + spriteSubmarino.altura);
		spriteSubmarino.desenha(this.x, this.y);
	},
	
	reset:function(){
		this.y=0
	}
}
