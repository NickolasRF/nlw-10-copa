function creategame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}
let delay = -0.4
function creatcard(date, day, games) {
  delay = delay + 0.4
  return `  
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games} 
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  creatcard(
    "24/11",
    "quinta",
    creategame("switzerland", "07:00", "cameroom") +
      creategame("uruguay", "10:00", "southkorea") +
      creategame("portugal", "13:00", "ghana") +
      creategame("brazil", "16:00", "serbia")
  ) +
  creatcard(
    "28/11",
    "segunda",
    creategame("cameroom", "07:00", "serbia") +
      creategame("southkorea", "10:00", "ghana") +
      creategame("brazil", "13:00", "switzerland") +
      creategame("portugal", "16:00", "uruguay")
  ) +
  creatcard(
    "02/12",
    "segunda",
    creategame("southkorea", "13:00", "portugal") +
      creategame("ghana", "16:00", "uruguay") +
      creategame("serbia", "13:00", "switzerland") +
      creategame("brazil", "16:00", "cameroom")
  )
