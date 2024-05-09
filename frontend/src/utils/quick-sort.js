// prettier-ignore
export const quickSort = (array = [], start = 0, end = array.length - 1) => {
  if (start >= end) {
    return array
  }

  let pivotIndex = start
  const pivotValue = array[end]

  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]]
      pivotIndex++
    }
  }
  [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]]

  quickSort(array, start, pivotIndex -1)
  quickSort(array, pivotIndex + 1, end)

  return array
}

console.log(quickSort([2, 4, 5, 12, 1, 8]))
