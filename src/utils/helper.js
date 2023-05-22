
// export const randomNameGenerator = () => {
//    let res = '';
//    for(let i = 0; i < 10; i++){
//       const random = Math.floor(Math.random() * 27);
//       res += String.fromCharCode(97 + random);
//    };
//    return res;
// };

const nameList = [ "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",]

export function randomNameGenerator() {
    return nameList[Math.floor(Math.random() * nameList.length)];
}

export const randomStringGenerator = () => {
    let res = '';
    for(let i = 0; i < 30; i++){
       const random = Math.floor(Math.random() * 27);
       res += String.fromCharCode(97 + random);
    };
    return res;
 };