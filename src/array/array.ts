export default function arraySample() {
  // シンプルな型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow') // OK
  //colors.push(123) // NG
  console.log('Array array sample 1:', colors)

  //const odd: number[] = [1, 3, 5]
  const even: Array<number> = [2, 4, 6]
  even.push(8)
  //even.push("8")
  console.log('Array array sample 2:', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('EDF') // OK
  ids.push(456) // OK
  console.log('Array array sample 3:', ids)

  // 配列の型推論
  const generateSomeArray = () => {
    const _someArray = [] // any[]
    _someArray.push(123) // number[]として推論される
    _someArray.push('ABC') // (string | number)[]として推論される
    return _someArray
  }
  const someArray = generateSomeArray()
  someArray.push(456) // OK
  //someArray.push(trure)  // NG
  console.log('Array array sample 4:', someArray)

  // イミュータブルな配列（書き換え不可）
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  //commands.push('get fetch') // 追加不可
  //comands[2] = 'git pull' // 代入負荷
  console.log('Array array sample 5:', commands)
}
