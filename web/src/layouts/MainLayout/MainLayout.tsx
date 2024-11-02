import { Link, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>HobbyLog</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; koudenpa</p>
        <p>
          GitHub:
          <a href="https://github.com/7474/HobbyLog">HobbyLog</a>
        </p>
      </footer>
    </>
  )
}

export default MainLayout
