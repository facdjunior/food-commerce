import { useSnack } from "../../../hooks/useSnack"

import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"

export default function Sobremesas() {

  const { sobremesas } = useSnack();

  return (<>

    <Head title="Sobremesas" description="Melhores hambúrgueres da cidade" />
    <SnackTitle>Sobremesas</SnackTitle>
    <Snacks snacks={sobremesas}></Snacks>

  </>
  )
}
