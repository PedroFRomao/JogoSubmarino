
/*
    x, y -> a partir de que ponto devo pegar a imagem
*/
function Sprite(x, y, largura, altura, srcImg){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura  = altura;

    this.desenha = function(xCanvas, yCanvas){
        img = new Image();
        img.src=srcImg;
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
    }
}

spriteInicio    = new Sprite(0, 0, 200, 205, "img/start.png");
spriteGameover  = new Sprite(0, 0, 256, 256, "img/gameover.png");
spriteBg        = new Sprite(0, 0, window.innerWidth, window.innerHeight, "img/bg.png");
spriteTubarao    = new Sprite(10, 40, 230, 190, "img/tubarao.png");
spriteSubmarino = new Sprite(0, 0, 282, 249,  "img/submarino2.png");
