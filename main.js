var containerElemento = document.querySelector('.container');
var novaPostagemElemento = document.querySelector('#novaPostagem');
var posts = [
  {
    foto: 'https://jogoveio.com.br/wp-content/uploads/2020/11/37248-alex-kidd-in-miracle-world-sega-master-system-screenshot-the.png',
    titulo: 'Alex Kidd',
    plataforma: 'Master System 2',
    texto:
      'Alex Kidd foi o protagonista de uma série de videogames produzidos pela SEGA entre o final dos anos 80 e início dos anos 90. O personagem e seus jogos inicialmente fizeram sucesso, a ponto da Sega aproveitar sua imagem como seu mascote oficial.'
  },
  {
    foto: 'https://s2.glbimg.com/AAx7gKVLgdVabtUTqZCNKJIsg10=/800x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2014/07/30/the-king-of-fighters-98-3.png',
    titulo: 'The King Of Fighters 98',
    plataforma: 'Arcade',
    texto:
      'É o sexto jogo da série The King of Fighters e o primeiro jogo não-canônico à série, ou seja, não tem parte na sequência real da história da série.'
  },
  {
    foto: 'https://http2.mlstatic.com/D_NQ_NP_757078-MLB48988678257_012022-O.webp',
    titulo: 'Castlevania Dracula X',
    plataforma: 'Super Nintendo',
    texto:
      'O jogo se passa na Transilvânia medieval.[3] Centenas de anos após o lendário herói Simon Belmont derrotar o maléfico Conde Dracula e o aprisionar para, o que deveria ter sido, a eternidade.[3] As pessoas já haviam esquecido o horror dos mortos-vivos, o que permitiu alguns indivíduos depravados restaurar o Príncipe das Trevas à sua forma antiga; dormindo em seu caixão durante o dia e caçando vítimas desafortunadas e indefesas à noite.'
  },
 {
    foto: 'https://warpzone.me/wp-content/uploads/2020/08/msvx.png',
    titulo: 'Arcade - NeoGeo',
    plataforma: 'Arcade - NeoGeo',
    texto:
      'Neo Geo é uma família da hardware de videogames desenvolvido pela SNK. No mercado de 1990 a 2004, a marca originou-se com a liberação de um sistema arcade, o Neo Geo MVS e sua contraparte de console doméstico, o Neo Geo AES.'
  }
  
];

var tituloInputElemento = document.querySelector('#titulo')
var plataformaInputElemento = document.querySelector('#plataforma')
var textoInputElemento = document.querySelector('#texto')
var urlInputElemento = document.querySelector('#url')


for (let post of posts) {
  containerElemento.innerHTML += `
        <div class="item">
            <img src="${post.foto}">
            <h2>${post.titulo}</h2>
            <h3>${post.plataforma}</h3>
            <p>${post.texto}</p>
        </div>
    `;
}

novaPostagemElemento.addEventListener('click', (event) => {

    event.preventDefault()


  let postagem = {
    foto: urlInputElemento.value.trim(),
    titulo: tituloInputElemento.value.trim(),
    plataforma: plataformaInputElemento.value.trim(),
    texto: textoInputElemento.value.trim()
  };

  containerElemento.innerHTML += `
    <div class="item">
        <img src="${postagem.foto}">
        <h2>${postagem.titulo}</h2>
        <h3>${postagem.plataforma}</h3>
        <p>${postagem.texto}</p>
    </div>
`;


// Limpar o formulário depois de enviar
tituloInputElemento.value = ""
urlInputElemento.value = ""
plataformaInputElemento.value = ""
textoInputElemento.value = ""


});
