import HomeIcon from '@/assets/icons/home.svg';

function Navigation() {
  return (
	<nav>
	  <ul>
		<li>
		  <Link to="/">Home</Link>
		</li>
		<li>
		  <Link to="/about">About</Link>
		</li>
		<li>
		  <Link to="/contact">Contact</Link>
		</li>
	  </ul>
	</nav>
  );
}