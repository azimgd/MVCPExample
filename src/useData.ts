import React from 'react'

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

type TDataItem = {
  key: number,
  size: number,
  color: string,
}

const useData = () => {
  const [data, setData] = React.useState<TDataItem[]>([])
  const [prependedCount, setPrependedCount] = React.useState<number>(0)
  const [appendedCount, setAppendedCount] = React.useState<number>(0)

  const generate = (size = 10) => {
    const rows = new Array(size)
      .fill(true)
      .map((item, index) => ({ key: index, size: 25 + Math.round(Math.random() * 100), color: getRandomColor() }))
    return rows
  }

  const append = () => {
    // @ts-ignore
    setData(state => [...state, ...generate()])
    setAppendedCount(state => state + 10)
  }

  const prepend = () => {
    // @ts-ignore
    setData(state => [...generate(), ...state])
    setPrependedCount(state => state + 10)
  }

  return {
    data,
    append,
    prepend,
    prependedCount,
    appendedCount,
  }
}

export default useData