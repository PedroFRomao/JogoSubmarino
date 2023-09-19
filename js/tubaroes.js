tubaroes = {
	_obs:[],
	tempoInsere: 0, //controla o tempo de inserção de obstáculos

	//cada obstáculo é um objeto
	insere: function () {
		this._obs.push({
			x: LARGURA,
			altura: Math.random() * ALTURA // Gera uma posição Y aleatória dentro da tela
		});
		this.tempoInsere = 160 + Math.floor(20 * Math.random());
	},
	
	/*
		A todo momento fica vireficando se precisa inserir mais pedras
		testa se houve colisão
		remove do vetor, as pedras que ja passaram pelo submarino
	*/
	atualiza: function () {
		(this.tempoInsere == 0) ? this.insere() : this.tempoInsere--;
	
		for (var i = 0, tam = this._obs.length; i < tam; i++) {
			var obs = this._obs[i];

			// Move o eixo X da pedra sempre para a esquerda
			obs.x -= velocidade;
	
			// Calcula as coordenadas da colisão com base na posição do sprite
			var colisaoX = Math.max(submarino.x, obs.x);
			var colisaoY = Math.max(submarino.y, obs.altura);
	
			// Verifica colisão com base nas dimensões do sprite do submarino e da pedra
			if (this._obs[i].x <= (submarino.x + spriteSubmarino.largura) && 
				(this._obs[i].y + spriteTubarao.altura) >= submarino.y &&
				(submarino.y + spriteSubmarino.altura) >= this._obs[i].y)
			{
				estadoAtual = estados.perdeu;
				this.resetGame();
			} 
			else if (obs.x <= -spriteTubarao.largura) 
			{
				this._obs.splice(i, 1);
				tam--;
				i--;
				score.value++;
			}
		}
	},
	
	posisaoTubarao:function(){
		

	},


	resetGame:function(){
		canvas.removeEventListener("mousedown", clique)
		setTimeout(()=>{
			canvas.addEventListener("mousedown", clique)
			clique()
		}, 3000)
	},


	limpa:function(){
		this._obs = []
	},

	desenha: function () {
		for (var i = 0, tam = this._obs.length; i < tam; i++) {
			// Desenha a área de colisão da pedra ajustada à sua posição
			//ctx.fillStyle = "green";
			//ctx.fillRect(this._obs[i].x, this._obs[i].altura - spriteTubarao.altura, spriteTubarao.largura, spriteTubarao.altura);
	
			// Desenha o sprite da pedra
			spriteTubarao.desenha(this._obs[i].x, this._obs[i].altura - spriteTubarao.altura);

			ctx.fillStyle = "#fff"
			ctx.font      = "50px Arial"
			//ctx.fillText(this._obs[i].x, 300+i*100, 110+i*60)
			//ctx.fillText(Math.floor(this._obs[i].altura), 300+i*100, 160+i*60)
		}
	},
}