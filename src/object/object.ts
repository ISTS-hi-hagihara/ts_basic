export default function objectSample() {
  //   const a: object = {
  //     name: 'Torahack',
  //     age: 29,
  //   }
  //a.name

  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'Unaited States of America',
  }
  console.log('Object object sample 2:', country)

  // オプショナルとreadonly
  const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'Yamada',
    firstName: 'Tarou',
  }
  torahack.gender = 'male' // 後から追加ｄけいる
  torahack.lastName = 'Kamado' // 上書きできる
  //torahack.firstName = 'Tanjiro' // 上書きできない

  console.log('Object object sample 3:', torahack)
}
