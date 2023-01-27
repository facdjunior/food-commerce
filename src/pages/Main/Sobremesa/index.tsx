import { useEffect, useState } from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getSobremesas } from "../../../services/api"

export default function Sobremesas() {
  const [sobremesa, setSobremesa] = useState([])

  useEffect(() => {
    (async () => {
      const sobremesaRequest = await getSobremesas()

      setSobremesa(sobremesaRequest.data)
    })()
  }, [])


  return (<>

    <Head title="Sobremesas" description="Melhores hambúrgueres da cidade" />
    <SnackTitle>Sobremesas</SnackTitle>
    <Snacks snacks={sobremesa}></Snacks>

  </>
  )
}
