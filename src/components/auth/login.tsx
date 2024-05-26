import { useAuthState } from '@/stores/store.auth';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';

const Login = () => {
	const { setAuth } = useAuthState();
	return (
		<div className='flex flex-col'>
			<h2 className='text-xl font-bold'>Login</h2>
			<p className='text-muted-foreground'>
				Don't have an account{' '}
				<span className='text-blue-500 cursor-pointer hover:underline ' onClick={() => setAuth('register')}>
					Sign up
				</span>
			</p>
			<Separator className='my-3' />
			<div>
				<span>Email</span>
				<Input placeholder='javoxireshquvvatovv@gmail.com' />
			</div>
			<div className='mt-2'>
				<span>Password</span>
				<Input placeholder='********' type='password' />
			</div>
			<Button className='w-full mt-2 h-12'>Login</Button>
		</div>
	);
};

export default Login;
