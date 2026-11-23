const facts = [
  "Drony FPV leci zwykle 4-6 minut na jednej baterii — efektywność to podstawa.",
  "Rust to zero-cost abstractions: logika bez GC.",
  "Lokalne AI: dane zostają na własnym sprzęcie.",
  "CCNA to routing, switching i bezpieczeństwo sieci — z praktycznym podejściem.",
  "FPV to widok pilota w czasie rzeczywistym — prędkość i precyzja."
];

const btn = document.querySelector("#fact-btn");
const out = document.querySelector("#fact-text");

if (btn && out) {
  let i = 0;
  btn.addEventListener("click", () => {
    out.textContent = facts[i % facts.length];
    i++;
  });
}
