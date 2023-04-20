
/*Criação da variável link, recebendo todos hyperlinks
(pode ser criado uma classe mais específica para não atingir todos hyperlinks).*/ 
let links = document.querySelectorAll('a');

/*Criação da função para adicionar e remover as animações dos "botões" (todos hyperlinks).*/
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('button_animation_i');
  });

  link.addEventListener('mouseout', () => {
    link.classList.remove('button_animation_i');
  });
});