import Link from 'next/link'

const links = [{
  label: 'Home',
  route: '/'
},
{
  label: 'About',
  route: '/about'
}]

export default function Navigation () {
  return (
    <header className='w-100 bg-white h-12'>
      <nav className='my-0 mx-auto w-5/6'>
        <ul className=' flex justify-around'>
          {links.map(({ label, route }) => (
            <li key={label} className='p-3'>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
