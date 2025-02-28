function showTime() {
  const now = new Date(); // Obtém a data e hora atual (Usando uma const para não ser alterado.)
  const timeString = now.toLocaleTimeString(); // Formata a hora no formato HH:MM:SS (Transforma em String.)
  console.clear(); // Toda vez que a função for chamada, limpa o terminal para exibir apenas o horário atualizado
  console.log(`🕒 Horário: ${timeString}`); // Exibe a hora no terminal
}
  
setInterval(showTime, 1000); // Atualiza a cada segundo utilizando a função criada a cada 1000 milisecs.
