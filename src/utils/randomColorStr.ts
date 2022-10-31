/*
* 获取随机颜色字符 白色除外
* */
export default function randomColorStr() {
  const colors = [
    '#f56c6c',
    '#e6a23c',
    '#5cb87a',
    '#1989fa',
    '#6f7ad3',
    '#ff9900',
    '#ff99cc',
    '#ffcc00',
    '#ffcc99',
    '#ffccff',
    '#ffcc33',
    '#ffcccc',
    '#ffcc66',
  ]
  for (let i = 0; i < colors.length; i++) {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }
}
