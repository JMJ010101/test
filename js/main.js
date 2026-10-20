const crafts = {
  pottery: {
    line: "물레 위에서 흙이 컵이 되는 두 시간. 구워서 집으로 보내줘요.",
    path: "M110 316 C60 300 70 220 105 190 C120 175 120 160 112 140 L112 120 L188 120 L188 140 C180 160 180 175 195 190 C230 220 240 300 190 316 Z"
  },
  baking: {
    line: "반죽부터 오븐까지, 갓 구운 빵을 상자에 담아 가져가요.",
    path: "M70 316 L70 230 C70 170 110 140 150 140 C190 140 230 170 230 230 L230 316 Z"
  },
  leather: {
    line: "가죽을 자르고 꿰매 내 이니셜이 들어간 카드지갑 하나.",
    path: "M60 316 L60 190 C60 175 70 165 85 165 L215 165 C230 165 240 175 240 190 L240 316 Z M60 215 L240 215"
  },
  flower: {
    line: "계절 꽃을 고르고 묶어 오늘 저녁 식탁에 올릴 꽃다발을 만들어요.",
    path: "M150 316 L150 210 M150 210 C110 200 100 150 130 130 C140 150 150 150 150 120 C150 150 160 150 170 130 C200 150 190 200 150 210 Z"
  },
  drawing: {
    line: "연필과 수채 물감으로 한 장. 그림 경험은 필요 없어요.",
    path: "M80 316 L150 130 L220 316 Z"
  },
  perfume: {
    line: "향료를 직접 섞어 나만의 향수를 병에 담아 가요.",
    path: "M130 316 C80 316 80 220 130 220 L130 190 L170 190 L170 220 C220 220 220 316 170 316 Z M135 190 L135 160 L165 160 L165 190"
  }
};

const shape = document.getElementById("shapePath");
const line = document.getElementById("craftLine");
const chips = document.querySelectorAll(".chip");

function pick(key) {
  document.body.dataset.craft = key;
  shape.setAttribute("d", crafts[key].path);
  shape.setAttribute("stroke", "var(--ink)");
  shape.setAttribute("stroke-width", key === "leather" || key === "flower" ? 6 : 0);
  shape.style.fill = key === "flower" ? "none" : "";
  shape.setAttribute("stroke-linecap", "round");
  shape.setAttribute("stroke-linejoin", "round");
  line.textContent = crafts[key].line;
  chips.forEach(c => {
    const on = c.dataset.craft === key;
    c.classList.toggle("is-active", on);
    c.setAttribute("aria-selected", on);
  });
}

chips.forEach(c => c.addEventListener("click", () => pick(c.dataset.craft)));
pick("pottery");
