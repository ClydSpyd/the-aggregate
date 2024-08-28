export const getPopupPosition = (
  containerRef: React.RefObject<HTMLDivElement>
): React.CSSProperties => {
  if (!containerRef.current) return {};
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const cardRect = containerRef.current.getBoundingClientRect();

  // const extremeTop = cardRect.top < 200;
  const extremeLeft = cardRect.left < 300;
  const extremeRight = viewportWidth - cardRect.right < 100;
  
  const overflowLeft = cardRect.left < 20;
  const overflowRight = viewportWidth - cardRect.right < 20;
  const isOverflow = overflowLeft || overflowRight;

  const topPosition = "-200px";
  const leftPosition = extremeLeft ? "80%" : "50%";
  const rightPosition = extremeRight ? "-95%" : undefined;

  console.log({
    overRight: viewportWidth - cardRect.right,
    leftPosition,
    rightPosition,
    viewportWidth,
    viewportHeight,
    top: cardRect.top,
    right: cardRect.right,
    bottom: cardRect.bottom,
    left: cardRect.left,
    extremeRight
  });

  return {
    top: topPosition,
    left: extremeRight ? undefined : leftPosition,
    right: rightPosition,
    transform: `translateX(-50%)`,
    display: isOverflow ? "none" : "block",
    zIndex: "100"
  };
};
