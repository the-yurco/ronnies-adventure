import Image from 'next/image';
import RonkoIMG from '/src/assets/ronko1.jpg';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex justify-center">
			<div className="containeris"></div>
			<section className="container pt-24">
				<section id="hero-section" className="grid grid-cols-3">
					<div className="flex flex-col justify-between col-start-1 col-end-3">
						<div>
							<h1 className="text-6xl mb-5">
								Zdravim vsetkych, ja jsem
								<span className="text-purple underline text-7xl"> RONNIE</span>
							</h1>
							<p className="text-2xl pb-12">
								Ronko Bonko, milovnik zien a takisto chlapkych udov.
							</p>
							<Link href={'/sexy-fotky'} className="bg-purple rounded-lg p-3">
								Pot si ma pozriet
							</Link>
						</div>
						<div>
							<h1 className="text-6xl border border-purple p-3">
								{`"Zanechavam respekt kazdemu co ma nenecha kdyz jsem nejnize"`}
							</h1>
						</div>
					</div>
					<div className="flex justify-end">
						<Image
							src={RonkoIMG}
							alt={''}
							height={600}
							width={430}
							className="border-4 border-purple rounded-lg col-start-3 col-end-4 "
						></Image>
					</div>
				</section>
			</section>
		</main>
	);
}
