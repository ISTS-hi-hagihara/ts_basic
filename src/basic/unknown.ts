export default function unknownSample(): void {
  const maybeNUmber: unknown = 10
  console.log('unknown Sample 1', typeof maybeNUmber, maybeNUmber)

  const isFoo = maybeNUmber === 'foo'
  console.log('unknown Sample 2', typeof isFoo, isFoo)

  //const sum = maybeNUmber + 10
  if (typeof maybeNUmber === 'number') {
    const sum = maybeNUmber + 10
    console.log('unknown Sample 3', typeof sum, sum)
  }
}
