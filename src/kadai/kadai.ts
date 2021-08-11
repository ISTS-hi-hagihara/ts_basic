// 工藤さんからの課題
// 下記課題2つをTypeScriptかつ美しいコードで実装してみてください。
// 数字を1~100まで与えた時に、以下の条件に従って文字を出力する。
// ・3の倍数の時に "F" と出力
// ・5の倍数の時に "B" と出力
// ・3の倍数かつ5の倍数(つまり15の倍数)の時に "FB" と出力
// それ以外の場合には与えられた数値を出力
// 課題1: 実装条件なし
// 課題2: 実装条件(if, for, whileの使用禁止)
// ※成果物は勉強用GitHubの個人リポジトリに格納してください。各実装どれくらいかかったかもメモ程度に残していただけると嬉しいです。
// 実行結果の例(1~50)
// 1, 2, F, 4, B, F, 7, 8, F, B, 11, F, 13, 14, FB, 16, 17, F, 19, B, F, 22, 23, F, B, 26, F, 28, 29, FB, 31, 32, F, 34, B, F, 37, 38, F, B, 41, F, 43, 44, FB, 46, 47, F, 49, B

// 課題１：パターン１(作業時間：30分程度)
const divLesson1 = (num: number): string => {
  let result = ''
  for (let cnt = 1; cnt <= num; ++cnt) {
    if (!(cnt % 3) && !(cnt % 5)) {
      result += 'FB, '
    } else if (!(cnt % 3)) {
      result += 'F, '
    } else if (!(cnt % 5)) {
      result += 'B, '
    } else {
      result += String(cnt) + ', '
    }
  }
  return result
}

// 課題２：パターン２（作業時間：30分程度）
const divLesson2 = (num: number): string => {
  let result = ''
  result += !(num % 15) ? 'FB, ' : !(num % 3) ? 'F, ' : !(num % 5) ? 'B, ' : String(num) + ', '
  return (num != 1 ? divLesson2(num - 1) : '') + result
}

// 課題２：パターン２．５（作業時間：10分程度）
const divLesson25 = (num: number): string =>
  (num != 1 ? divLesson25(num - 1) : '') +
  (!(num % 15) ? 'FB, ' : !(num % 3) ? 'F, ' : !(num % 5) ? 'B, ' : String(num) + ', ')

// 課題２：パターン３（作業時間：30分程度）※動画でmapを見て
const divLesson3 = (num: number): string => {
  let result = ''
  const array100: number[] = new Array(num).fill(0).map((v, i) => i + 1)
  //   num.reduce((total: number, num: number): number => {
  //     result += !(num % 15) ? 'FB ' : !(num % 3) ? 'F ' : !(num % 5) ? 'B ' : String(num) + ' '
  //     return total
  //   }, 0)
  array100.map((v) => (result += !(v % 15) ? 'FB, ' : !(v % 3) ? 'F, ' : !(v % 5) ? 'B, ' : String(v) + ', '))
  return result
}

// 課題２：パターン３．５（作業時間：10分程度）
const divLesson35 = (num: number): string => {
  let result = ''
  Array(num)
    .fill(0)
    .map((v, i) => (i++, (result += !(i % 15) ? 'FB, ' : !(i % 3) ? 'F, ' : !(i % 5) ? 'B, ' : String(i) + ', ')))
  return result
}

// 課題３：ストラテジパターン（作業時間：2時間程度）
// チェックストラテジ
interface NumCheckStrategy {
  printChar(): string
  isCheck(num: number): boolean
}

// 3で割れる数
class div3 implements NumCheckStrategy {
  printChar = (): string => 'F'
  isCheck = (num: number): boolean => !(num % 3)
}

// 5で割れる数
class div5 implements NumCheckStrategy {
  printChar = (): string => 'B'
  isCheck = (num: number): boolean => !(num % 5)
}

// 15で割れる数
class div15 implements NumCheckStrategy {
  printChar = (): string => 'FB'
  isCheck = (num: number): boolean => !(num % 15)
}

class DivCheck {
  private _strategy: NumCheckStrategy

  constructor(strategy: NumCheckStrategy) {
    this._strategy = strategy
  }

  printChar = (): string => this._strategy.printChar()
  isCheck = (num: number): boolean => this._strategy.isCheck(num)
}

const divLesson4 = (num: number): (number | string)[] => {
  let array100: (number | string)[] = new Array(100).fill(num).map((v, i) => i + 1)
  let divChk: NumCheckStrategy

  divChk = new DivCheck(new div3())
  array100 = array100.map((v, i) => (divChk.isCheck(i + 1) ? divChk.printChar() : v))

  divChk = new DivCheck(new div5())
  array100 = array100.map((v, i) => (divChk.isCheck(i + 1) ? divChk.printChar() : v))

  divChk = new DivCheck(new div15())
  array100 = array100.map((v, i) => (divChk.isCheck(i + 1) ? divChk.printChar() : v))

  return array100
}

// 課題の実行
export default function divLesson(): void {
  console.log('課題１ pattern 1: ', divLesson1(100))

  console.log('課題２ pattern 2: ', divLesson2(100))

  console.log('課題２ pattern 2.5: ', divLesson25(100))

  console.log('課題２ pattern 3: ', divLesson3(100))

  console.log('課題２ pattern 35: ', divLesson35(100))

  console.log('課題３ pattern 4: ', divLesson4(100))

  /*
  const resultAA = new DivCheck(new divNumberCheck())
  //   let data = new Array(100)
  //     .fill(0)
  //     .map((v, i) => (resultAA.isCheck(i + 1) ? resultAA.printChar() : i+1))
  const array100 = new Array(100).fill(0).map((v, i) => i + 1)
  const data = array100.map((v, i) => (resultAA.isCheck(i + 1) ? resultAA.printChar() : v))
  const data2 = data.map((v, i) => (resultAA.isCheck(i + 2) ? resultAA.printChar() : v))
  console.log('kadai pattern 4: ', data2)
*/

  //const xxx = new PairTicketStrategy()
  //console.log('test test ', xxx.getPrice())
  //let aaaa = new Ticket(PairTicketStrategy)
}
