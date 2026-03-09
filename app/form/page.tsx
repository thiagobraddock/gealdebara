"use client"

import { useEffect } from "react"

export default function FormRedirect() {
  useEffect(() => {
    window.location.href = "https://forms.gle/2cTakYnjQW1pmPo88"
  }, [])

  return (
    <p className="p-8 text-center text-scout-gray-500">
      Redirecionando para o formulário...
    </p>
  )
}
