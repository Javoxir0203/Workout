import { Skeleton } from '../ui/skeleton';
import { LuLoader2 } from 'react-icons/lu';

const FillLoading = () => {
	return <Skeleton className=' absolute inset-0 flex items-center justify-center w-full h-full opacity-20 z-50'>
        <LuLoader2 className=' animate-spin w-6 h-6'/>
    </Skeleton>;
};

export default FillLoading;
