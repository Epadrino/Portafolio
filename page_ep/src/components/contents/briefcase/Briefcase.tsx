import Image from 'next/image';
import React from 'react';
import {
	BoxContend,
	BoxLogo,
	Card,
	Container,
	ContainerCard,
	ContainerTitle,
	Logo,
	Title,
} from './briefcaseStyled';

export const Briefcase = () => {
	return (
		<Container>
			<ContainerTitle>
				<Title>Portafolio</Title>
			</ContainerTitle>
			<ContainerCard>
				<Card>
					<BoxLogo>
						<Logo>
							<Image
								src='/images/rodauce.png'
								alt='img'
								fill
								sizes='100vw'
							/>
						</Logo>
					</BoxLogo>
					<BoxContend>
						<h4>Landig Page</h4>
						<p>
							Pagina creada comercio ubicado en valencia España{' '}
							<br />
							<br />
							ir a: <a href='http://rodauce.es/'>Rodauce</a>
						</p>
					</BoxContend>
				</Card>
				<Card>
					<BoxLogo>
						<Logo>
							<Image
								src='/images/pokemonApi.png'
								alt='img'
								fill
								sizes='100vw'
							/>
						</Logo>
					</BoxLogo>
					<BoxContend>
						<h4>Probando API Pokemos</h4>
						<p>
							Creacion de una pagina utilizando la PokéAPI con
							Next.js <br />
							<br />
							ir a:{' '}
							<a href='https://pokemon-app-steel-xi.vercel.app/'>
								Pokemons
							</a>
						</p>
					</BoxContend>
				</Card>
			</ContainerCard>
		</Container>
	);
};
