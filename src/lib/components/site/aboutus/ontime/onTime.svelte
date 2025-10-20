<script lang="ts">
	import { Heading } from '$components/ui/heading';
	import Connector from '../connector.svelte';

	import Holder from '../holder.svelte';
	import Line from '../line.svelte';
	import Card from './card.svelte';
	import PrizeQuote from './prizeQuote.svelte';
	import Tick from './tick.svelte';
	import Timeline from './timeline.svelte';

	import type { DirectusImage } from '$components/ui/image/image.svelte';

	type Prize = {
		cite: string;
		title: string;
	};

	const oag: DirectusImage = {
		image: '56406545-cc4b-4f81-a343-932a589186eb',
		queries: [['', '56406545-cc4b-4f81-a343-932a589186eb', {}]]
	};

	const cirium: DirectusImage = {
		image: 'd7e6b6ef-1fc5-40e0-b58e-b0d6258b208f',
		queries: [['', 'd7e6b6ef-1fc5-40e0-b58e-b0d6258b208f', {}]]
	};

	const logos = {
		cirium,
		oag,
		oagLatam: oag
	};

	const ciriumPrize = 'Aerolínea más puntual de Latinoamérica.';
	const ciriumCite =
		'https://www.cirium.com/resources/on-time-performance/cirium-on-time-performance-history/';

	const years: Record<string, Partial<Record<keyof typeof logos, Prize>>> = {
		'2014': {
			cirium: {
				cite: ciriumCite,
				title: ciriumPrize
			}
		},
		'2015': {
			cirium: {
				cite: ciriumCite,
				title: ciriumPrize
			}
		},
		'2016': {
			cirium: {
				cite: ciriumCite,
				title: ciriumPrize
			},
			oagLatam: {
				cite: 'https://info.oag.com/hubfs/Free_Reports/Punctuality_League/PunctualityLeagueReport2015.pdf',
				title: ciriumPrize
			},
			oag: {
				cite: 'https://info.oag.com/hubfs/Free_Reports/Punctuality_League/PunctualityLeagueReport2015.pdf',
				title: '2<sup>da</sup> Aerolínea más puntual del mundo.'
			}
		},
		'2017': {
			cirium: {
				cite: ciriumCite,
				title: ciriumPrize
			},
			oagLatam: {
				cite: 'https://www.bbc.com/mundo/noticias-38514302',
				title: '2<sup>da</sup> Aerolínea más puntual de Latinoamérica.'
			},
			oag: {
				cite: 'https://www.bbc.com/mundo/noticias-38514302',
				title: '2<sup>da</sup> Aerolínea más puntual del mundo.'
			}
		},
		'2018': {
			cirium: {
				cite: ciriumCite,
				title: ciriumPrize
			},
			oagLatam: {
				cite: 'https://www.oag.com/hubfs/free-reports/2018-reports/2018-punctuality-league/PunctualityReport2018.pdf',
				title: ciriumPrize
			},
			oag: {
				cite: 'https://www.oag.com/hubfs/free-reports/2018-reports/2018-punctuality-league/PunctualityReport2018.pdf',
				title: '4<sup>ta</sup> Aerolínea más puntual del mundo.'
			}
		},
		'2019': {
			oag: {
				cite: 'https://www.oag.com/reports/punctuality-league-2019',
				title: '<span class="text-xl">🏆</span> Aerolínea más puntual del mundo.'
			},
			cirium: {
				cite: ciriumCite,
				title: ciriumPrize
			},
			oagLatam: {
				cite: 'https://www.oag.com/reports/punctuality-league-2019',
				title: ciriumPrize
			}
		},
		'2020': {
			cirium: {
				cite: ciriumCite,
				title: ciriumPrize
			},
			oagLatam: {
				cite: 'https://www.oag.com/hubfs/free-reports/2020-reports/punctuality-league-2020/Punctuality-League-2020.pdf',
				title: ciriumPrize
			},
			oag: {
				cite: 'https://www.oag.com/hubfs/free-reports/2020-reports/punctuality-league-2020/Punctuality-League-2020.pdf',
				title: '2<sup>da</sup> Aerolínea más puntual del mundo.'
			}
		},
		'2021': {
			cirium: {
				cite: ciriumCite,
				title: ciriumPrize
			}
		},
		'2023': {
			cirium: {
				cite: ciriumCite,
				title: ciriumPrize
			},
			oagLatam: {
				cite: 'https://www.oag.com/hubfs/free-reports/2023/OAG-Punctuality-League-2023.pdf',
				title: ciriumPrize
			},
			oag: {
				cite: 'https://www.oag.com/hubfs/free-reports/2023/OAG-Punctuality-League-2023.pdf',
				title: '8<sup>va</sup> Aerolínea más puntual del mundo.'
			}
		},
		'2024': {
			cirium: {
				cite: ciriumCite,
				title: ciriumPrize
			}
		},
		'2025': {
			cirium: {
				cite: ciriumCite,
				title: ciriumPrize
			}
		}
	} as const;
</script>

<Holder class="row-start-3">
	<Line />
	<Connector />
	<div class="text-common-white mb-big">
		<Heading variant="h3" tag="h3" class="text-common-white max-w-prose mb-petit">
			Somos la <span class="text-secondary-faded">aerolínea más premiada por puntualidad</span> en América
			en la última década
		</Heading>
		<div class="grid">
			<Timeline>
				{#each Object.keys(years) as year}
					{@const prizes = years[year]}
					<Tick>
						<Card>
							<Heading variant="displayTiny" tag="h4" class="text-common-white">{year}</Heading>
							{#each Object.keys(prizes) as prize}
								{@const { cite, title } = prizes[prize]}
								{@const logo = logos[prize]}
								<PrizeQuote
									cite="https://www.cirium.com/resources/on-time-performance/cirium-on-time-performance-history/"
									logo={logo ?? undefined}
								>
									{@html title}
								</PrizeQuote>
							{:else}
								<PrizeQuote
									cite="https://www.cirium.com/resources/on-time-performance/cirium-on-time-performance-history/"
								>
									No recibimos premios por puntualidad
								</PrizeQuote>
							{/each}
						</Card>
					</Tick>
				{/each}
			</Timeline>
		</div>
	</div>
</Holder>
