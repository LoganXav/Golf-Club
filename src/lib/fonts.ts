import {
  JetBrains_Mono as FontMono,
  Roboto_Mono as FontRoboto,
} from "next/font/google"
// import localFont from "next/font/local"

export const fontRoboto = FontRoboto({
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// Font files can be colocated inside of `pages`
// export const fontHeading = localFont({
//   src: "../assets/fonts/CalSans-SemiBold.woff2",
//   variable: "--font-heading",
// })
