// オプションパラメータを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('FUnction parameters sample 1: User is signed in! Username is', username)
    return true
  } else {
    console.log('FUnction parameters sample 2: User is not signed in!')
    return false
  }
}

// ディフォルトパラメータを持つ関数
export const isUserSignedIn2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('FUnction parameters sample 3: User is signed in! Username is', username)
    return true
  } else {
    console.log('FUnction parameters sample 4: User is not signed in!', username)
    return false
  }
}

// レストパラメータを持つ関数
export const sumProductPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((preTotal: number, productsPrice: number) => {
    return preTotal + productsPrice
  }, 0)
}
