export const getPopupPosition = (
  containerRef: React.RefObject<HTMLDivElement>
): React.CSSProperties => {
  if (!containerRef.current) return {};
  const viewportWidth = window.innerWidth;

  const cardRect = containerRef.current.getBoundingClientRect();

  const extremeLeft = cardRect.left < 300;
  const extremeRight = viewportWidth - cardRect.right < 100;
  
  const overflowLeft = cardRect.left < 20;
  const overflowRight = viewportWidth - cardRect.right < 20;
  const isOverflow = overflowLeft || overflowRight;

  const leftPosition = extremeLeft ? "100%" : "50%";
  const rightPosition = extremeRight ? "-120%" : undefined;

  return {
    top: '50%',
    left: extremeRight ? undefined : leftPosition,
    right: rightPosition,
    display: isOverflow ? "none" : "flex",
    zIndex: "100"
  };
};
