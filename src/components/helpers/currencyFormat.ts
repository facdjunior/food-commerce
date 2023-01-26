export function currencyFormat(currency: number){
  return new Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(currency)
}
