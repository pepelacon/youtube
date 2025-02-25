// import { Menu, SquarePlay } from 'lucide-react'

// export function SidebarHeader() {
// 	return (
// 		<div>
// 			<button>
// 				<Menu />
// 			</button>
// 			<span>
// 				<SquarePlay />
// 				<span>Video</span>
// 			</span>
// 		</div>
// 	)
// }

import { Menu, SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/colors.constants'

import { PAGE } from '@/config/public-page.config'

export function SidebarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<div className='flex items-center gap-6 mb-12'>
			<button
				className='opacity-85 hover:opacity-100 transition-opacity'
				onClick={toggleSidebar}
			>
				<Menu />
			</button>

			<Link
				href={PAGE.HOME}
				className='flex items-center gap-1.5'
			>
				<SquarePlay
					color={COLORS.primary}
					size={29}
				/>
				<span className='font-medium text-xl'>Video</span>
			</Link>
		</div>
	)
}
