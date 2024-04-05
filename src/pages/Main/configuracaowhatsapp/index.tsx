import { useState, useEffect } from "react";
import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { getZap } from "../../../services/api";
import { Container } from "../styles";

export default function Main() {
  const [zap, setZap] = useState([])

  useEffect(() => {
    (async () => {
      const zapRequest = await getZap()

      setZap(zapRequest.data)
    })()
  }, [])

  return (

          <img src={'zap'} />



  )
}
