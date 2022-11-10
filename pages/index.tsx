import Link from 'next/link'
import Foo from '../components/Foo/Foo'

export default function Home() {
  return (
    <div>
      <div>This should be green: <Foo/></div>
      <Link href="/bar">Go here</Link>
    </div>
  )
}
