import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Bebidas() {
  const data = [
    {
      id: 1,
      snack: 'drink',
      name: 'Coca Cola 2L',
      description: 'A tradicional Coca-Cola que a familia brasileira adora',
      price: 12,
      image: 'https://i.imgur.com/Lg3aKhf.jpg',
    },
    {
      id: 2,
      snack: 'drink',
      name: 'Guaraná Antarctica',
      description: 'O irresitível e saboroso Guaraná Antarctica em sua versão de latinha',
      price: 6.5,
      image: 'https://i.imgur.com/hOBrOIm.jpg',
    },
    {
      id: 3,
      snack: 'drink',
      name: 'Suco de Abacaxi',
      description: 'Suco natural de abacaxi com leves incrementos de algumas ortaliças para fortificar sua saúde.',
      price: 8,
      image: 'https://i.imgur.com/VV9qTMh.jpg',
    },
  ]
  return (<>

    <Head title="Bebidas" description="Melhores drink's e bebidas para todos os gostos" />
    <SnackTitle>Bebidas</SnackTitle>
    <Snacks snacks={data}></Snacks>

  </>
  )
}
