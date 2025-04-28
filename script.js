// Data que vocês começaram a namorar / ficar juntos
const startDate = new Date('2024-02-25'); // <-- altere essa data para a de vocês!

function updateTimeTogether() {
  const today = new Date();
  const diffTime = today - startDate;

  const seconds = Math.floor(diffTime / 1000) % 60;
  const minutes = Math.floor(diffTime / (1000 * 60)) % 60;
  const hours = Math.floor(diffTime / (1000 * 60 * 60)) % 24;
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const years = Math.floor(totalDays / 365);
  const remainingDaysAfterYears = totalDays % 365;

  const months = Math.floor(remainingDaysAfterYears / 30); // Aproximando o mês para 30 dias
  const days = remainingDaysAfterYears % 30;

  document.getElementById('years').textContent = `${years} anos`;
  document.getElementById('months').textContent = `${months} meses`;
  document.getElementById('days').textContent = `${days} dias`;
  document.getElementById('hours').textContent = `${hours} horas`;
  document.getElementById('minutes').textContent = `${minutes} minutos`;
  document.getElementById('seconds').textContent = `${seconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateTimeTogether, 1000);

// Atualiza imediatamente ao carregar a página
updateTimeTogether();