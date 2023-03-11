import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="align-middle text-center">
     <h1 className="text-3xl font-bold text-blue-800">Next Boilerplate</h1>
      <Link href="/users">
          Users
      </Link>
    </div>
  )
}
