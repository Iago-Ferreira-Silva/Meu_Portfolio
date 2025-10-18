export function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const telefone = import.meta.env.VITE_WHATSAPP_NUMBER;

  if (!nome || !mensagem) {
    alert('Por favor, preencha seu nome e mensagem antes de enviar.');
    return;
  }

  const texto = `Olá, meu nome é ${nome}.\n${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);
  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  window.open(url, '_blank');
}