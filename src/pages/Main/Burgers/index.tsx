import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description: 'O artesanal tamanho familia recheado com três carnes suculentas, queijo e bacon.',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Extra bacon',
      description: 'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
  ]
  console.log(data)
  return (<>

    <Head title="Hambúrgueres" description="Melhores hambúrgueres da cidade" />
    <SnackTitle>Hambúrgueres</SnackTitle>
    <Snacks snacks={data}></Snacks>

  </>
  )
}