// Butona tıklama işlemi
document.getElementById('increment-button').addEventListener('click', function() {
  const counterElement = document.getElementById('counter');
  let count = parseInt(counterElement.textContent);
  count++;
  counterElement.textContent = count;

 
  if (count === 5) {
      alert("Dikkat! Telefonunuza 5 kez baktınız. Dikkatinizi toplamaya çalışın.");
  }
});
