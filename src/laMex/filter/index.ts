export const filter = function (data: any, value: string | Object) {
  return data.filter((item:any) => item === value)
}