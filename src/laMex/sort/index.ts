export const sort = function(data: any, sort?: string) {
  // 升序
  if (sort && sort === 'a') {
    return data.sort((a: any, b:any) => a - b)
  } else if (sort && sort === 'b') {
    // 降序
    return data.sort((a: any, b:any) => b - a)
  } else {
    // 默认降序
    return data.sort((a: any, b:any) => b - a)
  }
}