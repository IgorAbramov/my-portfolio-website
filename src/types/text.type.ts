import React from "react"

export type TextType = {
   component: "p" | "span" | "li" | "h3" | "h2" | "h1"
   variant: "h1" | "h2" | "h3" | "paragraph" | "paragraph-lg" | "label"
   color: "brand" | "white" | "brandish" | "grey" | "brand-dark" | "brand-darker" | "accent" | "brown" | "greyish"
   isBold?: boolean
   children: React.ReactNode
   [k: string]: unknown
}