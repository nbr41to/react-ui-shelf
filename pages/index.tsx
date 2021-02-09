import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>react-ui-shelf</h1>
      <p>Storybookによって管理されたReact UIライブラリ</p>
      <Link href='/gallery'><a>Gallery</a></Link>
      <Link href='/test'><a>Test</a></Link>
      <Link href='/'><a>GitHub</a></Link>
    </div>
  )
}
