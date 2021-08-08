import { unknownSample, anySample, noExistSample, primitiveSample } from './basic'

primitiveSample()
noExistSample()
anySample()
unknownSample()

// import World from "./world";

// const root = document.getElementById("root");
// const world = new World("Hello World!");
// world.sayHello(root);

/*
// 課題１
const divLesson1 = (num: number): void => {
  let result = ''
  for (let cnt = 1; cnt <= num; ++cnt) {
    if (!(cnt % 3) && !(cnt % 5)) {
      result += 'FB '
    } else if (!(cnt % 3)) {
      result += 'F '
    } else if (!(cnt % 5)) {
      result += 'B '
    } else {
      result += String(cnt) + ' '
    }
  }
  console.log(result)
}
console.log('pattern1')
divLesson1(100)

// 課題２
const divLesson2 = (num: number): string => {
  let result = ''
  result += !(num % 15) ? 'FB ' : !(num % 3) ? 'F ' : !(num % 5) ? 'B ' : String(num) + ' '
  return (num != 1 ? divLesson2(num - 1) : '') + result
}
console.log('pattern2')
console.log(divLesson2(100))

const divLesson3 = (num: number): string =>
  (num != 1 ? divLesson3(num - 1) : '') +
  (!(num % 15) ? 'FB ' : !(num % 3) ? 'F ' : !(num % 5) ? 'B ' : String(num) + ' ')
console.log('pattern3')
console.log(divLesson3(100))
*/
