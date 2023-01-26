import { SnackTitle } from "../../../components/SnackTitle"
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"

export default function Pizzas() {

  const data = [
    {
      id: 1,
      snack: 'pizza',
      name: 'Calabreza',
      description: 'Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona, tenho uma borda recheada com catupiry',
      price: 25,
      image: 'https://i.imgur.com/5rjJGkV.jpg',
    },
    {
      id: 2,
      snack: 'pizza',
      name: 'Portuguesa',
      description: 'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate, tendo uma borda recheada com catupiry',
      price: 6,
      image: 'https://i.imgur.com/WCoyGoI.jpg',
    },

  ]

  return (<>

    <Head title="Pizzas" description="Melhores pizzas da cidade" />
    <SnackTitle>Pizzas</SnackTitle>
    <Snacks snacks={data}></Snacks>

  </>
  )
}