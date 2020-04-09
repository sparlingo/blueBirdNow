import Link from 'next/link'

const Nav = () => (
  <header className="navbar">
    <section className="navbar-section">
      <Link href="/">
        <button className="btn btn-link text-bold">Home</button>
      </Link>
      <Link href="/api/login">
        <button className="btn btn-link text-bold">Login</button>
      </Link>
    </section>
  </header>
)

export default Nav