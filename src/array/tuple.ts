export default function tupleSample(): void {
  // 一般的なタプルの型定義
  const response: [number, string] = [200, 'OK']
  //response = [400, 'Bad Request', 'Email parameter is missing'] // NG
  //response = ['400', 'Bad Request'] // NG
  console.log('Array tuple sample 1:', response)

  // 可変長引数を使ったタプル
  const girlFriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  girlFriends.push('MIsa')
  console.log('Array tuple sample 1:', girlFriends)
}
