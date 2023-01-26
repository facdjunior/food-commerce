import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Sobremesas() {

  const data = [
    {
      id: 2,
      snack: 'ice',
      name: 'Chocolate com granulado',
      description: 'Sorvete de chocolate com granulados em chocolate para você se deliciar.',
      price: 6,
      image: 'https://i.imgur.com/osAHOLe.jpg',
    },
    {
      id: 3,
      snack: 'ice',
      name: 'Flocos',
      description: 'O tradicional flocos vem com cobertura para adicionar seu dia',
      price: 7,
      image: 'https://i.imgur.com/qgnFLiy.jpg',
    },
  ]

  return (<>

    <Head title="Sobremesas" description="Melhores hambúrgueres da cidade" />
    <SnackTitle>Sobremesas</SnackTitle>
    <Snacks snacks={data}></Snacks>

  </>
  )
}
