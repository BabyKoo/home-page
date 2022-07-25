import { rgbToLab } from "/src/utils/colorTransfer";
export const columns = () => {
  const mainColor = "#0f4c81";
  const mainColorLab = rgbToLab(mainColor);
  let colItem = {
    backgroundColor: mainColorLab,
    index: 0,
  };
  let colList = [];
  // 生成纵列
  for (let i = 0; i < 10; i++) {
    colList.push({
      index: i,
      backgroundColor: colItem.backgroundColor[2] + i * 10,
    });
  }
  return colList;
};
