/**
 * 
 * @param {string} rgb RGB color start with '#'
 * @returns {Array<Number>}
 */
export let rgbToLab = (rgb) => {
  let R = rgb[1] + rgb[2];
  let G = rgb[3] + rgb[4];
  let B = rgb[4] + rgb[6];
  // rgb range: 0 ~ 1
  let r = parseInt(R, 16) / 255.0;
  let g = parseInt(G, 16) / 255.0;
  let b = parseInt(B, 16) / 255.0;
  // gamma 2.2
  if (r > 0.04045) {
    r = Math.pow((r + 0.055) / 1.055, 2.4);
  } else {
    r = r / 12.92;
  }
  if (g > 0.04045) {
    g = Math.pow((g + 0.055) / 1.055, 2.4);
  } else {
    g = g / 12.92;
  }
  if (b > 0.04045) {
    b = Math.pow((b + 0.055) / 1.055, 2.4);
  } else {
    b = b / 12.92;
  }
  // sRGB
  let X = r * 0.436052025 + g * 0.385081593 + b * 0.143087414;
  let Y = r * 0.222491598 + g * 0.71688606 + b * 0.060621486;
  let Z = r * 0.013929122 + g * 0.097097002 + b * 0.71418547;
  // XYZ range: 0~100
  X = X * 100.0;
  Y = Y * 100.0;
  Z = Z * 100.0;
  // Reference White Point
  let ref_X = 96.4221;
  let ref_Y = 100.0;
  let ref_Z = 82.5211;
  X = X / ref_X;
  Y = Y / ref_Y;
  Z = Z / ref_Z;
  // Lab
  if (X > 0.008856) {
    X = Math.pow(X, 1 / 3.0);
  } else {
    X = 7.787 * X + 16 / 116.0;
  }
  if (Y > 0.008856) {
    Y = Math.pow(Y, 1 / 3.0);
  } else {
    Y = 7.787 * Y + 16 / 116.0;
  }
  if (Z > 0.008856) {
    Z = Math.pow(Z, 1 / 3.0);
  } else {
    Z = 7.787 * Z + 16 / 116.0;
  }

  let lab_L = 116.0 * Y - 16.0;
  let lab_A = 500.0 * (X - Y);
  let lab_B = 200.0 * (Y - Z);
  // let labStr = "lab(" + lab_L + "% " + lab_A + " " + lab_B + ")"

  return [lab_L, lab_A, lab_B];
};
