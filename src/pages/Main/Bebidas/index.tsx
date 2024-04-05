import { useSnack } from "../../../hooks/useSnack"

import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"


export default function Bebidas() {

  const { bebidas } = useSnack()

  return (
    <>
      <Head title="Bebidas" description="Melhores drink's e bebidas para todos os gostos" />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={bebidas}></Snacks>
    </>
  )
}
