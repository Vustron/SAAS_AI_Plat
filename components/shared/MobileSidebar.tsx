'use client';

import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/shared/Sidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const MobileSidebar = () => {
	// fix hydration
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<Sheet>
			<SheetTrigger className='md:hidden'>
				<Menu />
			</SheetTrigger>
			<SheetContent side='left' className='p-0'>
				<Sidebar />
			</SheetContent>
		</Sheet>
	);
};

export default MobileSidebar;
