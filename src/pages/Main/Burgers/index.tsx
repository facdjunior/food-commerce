import { useSnack } from "../../../hooks/useSnack"

import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"



export default function Burgers() {

  const { burgers } = useSnack()

  return (
    <>

      <Head title="Hambúrgueres" description="Melhores hambúrgueres da cidade" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>

    </>
  )
}
