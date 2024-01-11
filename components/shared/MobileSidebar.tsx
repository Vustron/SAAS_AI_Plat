'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/shared/Sidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const MobileSidebar = () => {
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
