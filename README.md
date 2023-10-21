# Jogo de Submarino Amarelo 
### Trabalho de: Pedro Ferraz e Miguel Oliveira 2 Jogos<br>
Para esse projeto foi escolhido a musica:<br>
Yellow Submarine - The Beatles<br>
![image](https://github.com/PedroFRomao/JogoSubmarino/assets/120103357/9688c860-71d1-45fa-84d0-4c4b5e645345)

### **Video do jogo**


https://github.com/PedroFRomao/JogoSubmarino/assets/120103357/0dc699a8-e9e3-4acb-9351-853d5d7f5a6e



Este é um jogo de navegador simples onde o objetivo é controlar um submarino e evitar ser atingido por tubarões. O jogo é controlado pelo mouse e tem três estados:

**1. Jogar:** O jogo está em andamento e o jogador pode controlar o submarino.<br>
**2. Jogando:** O jogo está em andamento e o jogador está evitando os tubarões.<br>
**3. Perdeu:** O jogo acabou e o jogador perdeu.<br>

O jogo é construído usando HTML e JavaScript. O código é bem organizado e fácil de entender:<br> 
O arquivo `index.html` contém o código HTML e o código JavaScript principal do jogo. <br>
O arquivo `js/sprite.js` contém o código JavaScript para as sprites. <br>
O arquivo `js/submarino.js` contém o código JavaScript para o submarino. <br>
O arquivo `js/score.js` contém o código JavaScript para a pontuação. <br>
O arquivo `js/tubaroes.js` contém o código JavaScript para os tubarões.<br>

Para executar o jogo, basta abrir o arquivo `index.html` em um navegador e o jogo será iniciado automaticamente.



### Como jogar
![image](https://github.com/PedroFRomao/JogoSubmarino/assets/120103357/c7bee2cb-71d7-4c20-ba09-f9071ab3634e)

Para jogar, basta clicar no botao click here. O objetivo é evitar que o submarino seja atingido pelos tubarões.

### Pontuação
![image](https://github.com/PedroFRomao/JogoSubmarino/assets/120103357/193e0819-81df-43a2-9c08-7c0139aa3645)

A pontuação do jogo é baseada no número de tubarões que o jogador evita. Ela é exibida na parte superior da tela.

### Game Over
![image](https://github.com/PedroFRomao/JogoSubmarino/assets/120103357/98133a09-cb87-4410-ac82-5dc0779c631e)

O jogo acaba quando o submarino é atingido por um tubarão. Quando isso acontece, a tela "Game Over" é exibida. Para jogar novamente, basta esperar o botao click here voltar para reiniciar o jogo.

### Documentacao
![image](https://github.com/PedroFRomao/JogoCanva/assets/120103357/7102f719-6ae0-4ed9-8ea9-8d3154dd0faa)

![image](https://github.com/PedroFRomao/JogoCanva/assets/120103357/390e3285-3adb-44d2-b090-6844a68689b4)

<h1><center>Documentação Casos de Uso</center></h1><br>
Nome do caso de uso: Jogo do submarino<br>
Caso de uso geral: Desviar de obstáculos<br>
Ator principal: Jogador<br>
Resumo: O jogador deve subir com o submarino ou descer para desviar dos obstáculos que aparecerem, o objetivo é ficar o máximo de tempo o possível desviando<br>
Pré-condições: O jogo precisa ser iniciado<br>
Pós condições: Mostra o tempo q o jogador se manteve vivo<br>
<h3><center>Ações do jogador</center></h3><br>
1- Iniciar jogo<br>
2- Desviar dos obstáculos

<h1><center>Explicação do jogo</center></h1><br>
O jogador controla um submarino amarelo e terá que desviar de obstáculos circulares podendo somente subir ou descer enquanto os obstáculos são gerados na lateral direita do cenário e se movem até a outra lateral. O objetivo do jogo é se manter vivo o máximo do tempo sem bater em nenhum obstáculo, caso o jogador colida com um, o jogo mostrará o tempo que ele conseguiu desviar.

