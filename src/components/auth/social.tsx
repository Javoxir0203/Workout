import { FaGithub, FaGoogle } from 'react-icons/fa6';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase';
import FillLoading from '../shared/fill-loading';

const Social = () => {
	const [isloading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const onGoogle = () => {
		setIsLoading(true);
		const googleProvider = new GoogleAuthProvider();
		signInWithPopup(auth, googleProvider)
			.then(() => {
				navigate('/');
			})
			.finally(() => setIsLoading(false));
	};

	const onGithub = () => {
		setIsLoading(true);
		const githubProvider = new GithubAuthProvider();
		signInWithPopup(auth, githubProvider)
			.then(() => {
				navigate('/');
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<>
			{isloading && <FillLoading />}
			<Separator className='my-3' />
			<div className='grid grid-cols-2 gap-2'>
				<Button className='h-12' variant={'secondary'} disabled={isloading} onClick={onGithub}>
					<FaGithub className='mr-2' />
					<span>Sign in with Github</span>
				</Button>
				<Button className='h-12' variant={'destructive'} disabled={isloading} onClick={onGoogle}>
					<FaGoogle className='mr-2' />
					<span>Sign in with Google</span>
				</Button>
			</div>
		</>
	);
};

export default Social;
