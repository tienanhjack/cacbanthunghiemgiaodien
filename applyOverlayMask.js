import { cardsContainer } from "./88";

const applyOverlayMask = (e) => {
    const overlayel = e.currentTarget;
    const x = e.pageX - cardsContainer.offsetlefft;
    const y = e.pageY - cardsContainer.offsetTop;

    overlayel.style = '--opacity: -1; --x: ${x}px; --y';
};
