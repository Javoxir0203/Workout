import { navLinks } from '@/constants';
import { Button } from '../ui/button';
import { ModeToggle } from './mode-toggle';
import { Link } from 'react-router-dom';
import { useUserState } from '@/stores/user.store';
import UserBox from './user-box';

const Navbar = () => {
	const {user} =useUserState()

	return (
		<div className='w-full h-[10vh] border-b fixed inset-0 z-50 bg-background'>
			<div className=' container max-w-6xl mx-auto h-full flex items-center justify-between'>
				<Link to={'/'}>
					<h1 className='text-2xl font-bold uppercase'>Workout</h1>
				</Link>
				<div className='flex items-center gap-3'>
					{navLinks.map(nav => (
						<a key={nav.path} href={nav.path} className='font-medium hover:underline'>
							{nav.label}
						</a>
					))}
					<ModeToggle />
					{user ? (
						<UserBox />
					):(

					<Link to={'/auth'}>
						<Button variant={'secondary'}>Join Free</Button>
					</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
