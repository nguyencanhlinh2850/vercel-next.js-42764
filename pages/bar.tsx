import Link from 'next/link'
import Bar from '../components/Bar/Bar'

export default function Home() {
  return (
    <div>
      <div>This should be red: <Bar/></div>
      <Link href="/">Go back</Link>
    </div>
  )
}
