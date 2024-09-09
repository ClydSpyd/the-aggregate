export const brandColors = [
  "#284389", //0
  "#41D926", //1
  "#00FFFB", //2
  "#E5F20D", //3
  "#5D00FF", //4
  "#F20DAF", //5
  "#0075FF", //6
  "#F2AF0D", //7
  "#D91AE6", //8
];
export const contrastColors = [
  "#0f172ae6", //0
  "#ffffff", //1
  "#0f172ae6", //2
  "#ffffff", //3
  "#0f172ae6", //4
  "#ffffff", //5
  "#ffffff", //6
  "#0f172ae6", //7
  "#ffffff", //8
];

export const accentColors: Partial<Record<ArticleCategory, string>> = {
  tech: brandColors[2],
  sports: brandColors[1],
  politics: brandColors[4],
  science: brandColors[7],
  lifestyle: brandColors[3],
  environment: brandColors[5],
  trending: brandColors[8],
};