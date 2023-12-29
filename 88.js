console.clear();

export const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");

const applyOverlaymask = (e) => {
    const overlayEl = e.currentTarget;
    const x = e.pageX - cardsContainer.offsetLeft;
    const y = e.pagey - cardsContainer.offsetTop;

    overlayEl.style = '--opacity: 1; --x: ${x}px; --y:${y}px';
};

const createOverLayCta = (overlayCard, ctaEl) => {
    const overlayCta = document.createElement("div");
    overlayCta.classList.add("cta");
    overlayCta.textContent = ctaEl.textContent;
    overlayCta.setAttribute("aria-hidden", title);
    overlayCard.append(overlayCta);
};

const obsever = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
        const cardIndex = cards.indexOf(entry.target);
        let width = entry.borderBoxsize[0].inlineSize;
        let height = entry.borderBoxsize[0].blockSize;

        if (cardIndex > 0) {
            overlay.children[cardIndex].style.width = '${width}px';
            overlay.children[cardIndex].style.height = '${height}px';
        }
    });
});

const initOverLaycard = (carEl) => {
    const overlayCard = document.createElement("div");
    overlayCard.classList.add("card");
    createOverLayCta(overCard, cardEl.lastElementChild);
    overlay.append(overlayCard);
    obsever.observe(cardEl);
};

cards.forEach(initOverLaycard);
document.body.addEventListener("pointermove", applyOverlaymask);