import { useState, useEffect } from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getBebidas } from '../../../services/api'

export default function Bebidas() {
  const [bebidas, setBebidas] = useState([])

  useEffect (() => {
    (async () => {
      const bebedasRequest = await getBebidas()

      setBebidas(bebedasRequest.data)
    })()
  }, [])
  return (<>

    <Head title="Bebidas" description="Melhores drink's e bebidas para todos os gostos" />
    <SnackTitle>Bebidas</SnackTitle>
    <Snacks snacks={bebidas}></Snacks>

  </>
  )
}
