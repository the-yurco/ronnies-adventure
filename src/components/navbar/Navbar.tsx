import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import RonkoIMG from '/src/assets/ronko2.jpg';

type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className="">
			<div>
				<div className="px-20 py-3  flex justify-between items-center bg-purple">
					<Link href={'/'}>
						<Image
							src={RonkoIMG}
							alt={''}
							height={50}
							width={50}
							className=" rounded-full"
						></Image>
					</Link>
					<nav>
						<ul className="flex justify-around gap-5 items-center">
							<li>
								<Link
									href={'/o-mne'}
									className=" hover:bg-gray-900 hover:text-purple text-gray-900 p-3 rounded-md transition-all"
								>
									O mne
								</Link>
							</li>
							<li>
								<Link
									href={'/sexy-fotky'}
									className=" hover:bg-gray-900 hover:text-purple text-gray-900 p-3 rounded-md transition-all"
								>
									Sexy fotecky
								</Link>
							</li>
							<li>
								<Link
									href={'/skolicka'}
									className=" hover:bg-gray-900 hover:text-purple text-gray-900 p-3 rounded-md transition-all"
								>
									Skolicka
								</Link>
							</li>
							<li>
								<Link
									href={'/som-doma'}
									className=" hover:bg-gray-900 hover:text-purple text-gray-900 p-3 rounded-md transition-all"
								>
									Som doma
								</Link>
							</li>
							<li>
								<Link
									href={'/moja-hudba'}
									className=" hover:bg-gray-900 hover:text-purple text-gray-900 p-3 rounded-md transition-all"
								>
									Hudbicka
								</Link>
							</li>
						</ul>
					</nav>
					<Link
						href={'/logovanie'}
						className=" bg-red-600 text-gray-100 p-3 rounded-md"
					>
						Logni sa
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
