import Link from "next/link";
import { links } from "./links";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>Logo</div>
        {
          links.map(link => (
            <Link key={link.title} href={link.path}>{link.title}</Link>
          ))
        }
      </nav>
    </header>
  )
}

export default Navbar