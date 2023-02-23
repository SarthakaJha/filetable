import Image from 'next/image'
import { Inter } from '@next/font/google'
import Table from '@/pages/api/Table'
import "src/app/globals.css"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <Table/>
}
