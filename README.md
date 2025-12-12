Este projeto é uma simulação simples de uma lâmpada interativa construída com HTML, CSS e JavaScript puro. Ele demonstra como manipular elementos da página através de eventos, trocando imagens, alterando o layout e respondendo à interação do usuário.

 O que o projeto faz

A página exibe uma lâmpada com dois botões: Ligar e Desligar.
O usuário pode interagir tanto pelos botões quanto diretamente na própria imagem.

As ações são:

Ligar

Troca a imagem para ligada.png

Muda o fundo da página para branco

Aplica destaque visual na lâmpada

 Desligar

Troca para desligada.jpg

Volta o fundo para preto

Passar o mouse

Ao passar o mouse sobre a lâmpada, ela acende

Ao tirar o mouse, ela apaga
(sem interferir se estiver quebrada)

 Clique duplo (queimar)

Troca para quebrada.png

Substitui o fundo por uma imagem de fogo

Desativa todas as outras funcionalidades

Esse comportamento simula um fluxo realista: a lâmpada funciona, pode ser acesa/apagada, e pode quebrar definitivamente.

 Lógica do JavaScript

Os scripts controlam:

Detecção de estado da lâmpada (isLampBroken())

Troca de imagens baseadas em eventos

Alteração do estilo do body

Eventos de clique, mouseover, mouseleave e duplo clique

A função isLampBroken() é essencial — ela impede qualquer ação caso a lâmpada já esteja quebrada.

function isLampBroken() {
    return lamp.src.indexOf('quebrada.png') > -1;
}


Essa verificação mantém o fluxo consistente: uma lâmpada quebrada não volta a ligar.

 Estilo Visual

O projeto usa:

Fundo preto por padrão

Botões estilizados com sombra, contraste e animação

Hover que aumenta o tamanho da lâmpada

Cores intuitivas: verde para ligar, vermelho para desligar

Efeito dramático quando a lâmpada quebra (imagem + fundo em chamas)

O CSS é simples, mas transmite claramente a intenção visual da aplicação.

 Tecnologias Utilizadas

HTML5

CSS3

JavaScript (Vanilla JS)
Sem frameworks, apenas DOM puro.

 Estrutura esperada de arquivos
/
index.html
 style.css
 lampada.js
 desligada.jpg
ligada.png
 quebrada.png
fogo.jpg

 Objetivo do Projeto

Além de ser visualmente divertido, este projeto serve como treino prático para:

Manipulação do DOM

Eventos do navegador

Alteração dinâmica de estilos

Condicionais lógicas simples

Boas práticas no controle de estado
