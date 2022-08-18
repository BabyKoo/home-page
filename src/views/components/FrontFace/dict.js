// import { rgbToLab } from "/src/utils/colorTransfer";
import ColorRNA from "color-rna";
/**纵列数据生成函数 */
export const columns = () => {
  /**主题色 */
  const mainColor = new ColorRNA("#0f4c81");
  /**主题色 Lab式 */
  const mainColorLab = mainColor.Lab();
  /**纵列 */
  let colList = [];
  // 生成纵列色彩，亮度差10递增
  for (let i = 0; i < 7; i++) {
    let tempColor = [
      // 亮度差10递增
      mainColorLab[0] + i * 5,
      mainColorLab[1],
      mainColorLab[2],
    ];
    tempColor = new ColorRNA()._LabX(tempColor).getHex();
    colList.push({
      index: i,
      backgroundColor: tempColor,
      width: "10%",
    });
  }
  for (let i = 7; i < 10; i++) {
    colList.push({
      index: i,
      backgroundColor: mainColor.getHex(),
      width: "10%",
    });
  }
  return colList;
};
