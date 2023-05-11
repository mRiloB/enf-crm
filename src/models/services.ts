export interface Services {
  name: string
  price: number
}

export function createService (name: string, price: number) {
  const service: Services = { name, price }
  return service
}
