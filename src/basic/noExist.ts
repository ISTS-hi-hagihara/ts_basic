export default function noExsitSample(): void {
  let name = null
  console.log('noExist sample 1:', typeof name, name)

  name = 'trahack'
  if (!name) {
    console.log('noExist sample 2:', '吾輩は猫である。名前はまだ' + name)
  } else {
    console.log('noExist sample 3:', '吾輩は猫である。名前' + name)
  }

  const age = 20
  //let age = undefined
  console.log('noExist sample 4:', typeof age, age)

  if (!age) {
    console.log('noExist sample 5:', '年齢は秘密です')
  } else {
    console.log('noExist sample 6:', '年齢は' + age + 'です')
  }
}
