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
		label: string;
		rank?: {
			value: string;
			suffix: string;
		};
		trophy?: boolean;
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
				label: ciriumPrize
			}
		},
		'2015': {
			cirium: {
				cite: ciriumCite,
				label: ciriumPrize
			}
		},
		'2016': {
			cirium: {
				cite: ciriumCite,
				label: ciriumPrize
			},
			oagLatam: {
				cite: 'https://info.oag.com/hubfs/Free_Reports/Punctuality_League/PunctualityLeagueReport2015.pdf',
				label: ciriumPrize
			},
			oag: {
				cite: 'https://info.oag.com/hubfs/Free_Reports/Punctuality_League/PunctualityLeagueReport2015.pdf',
				label: 'Aerolínea más puntual del mundo.',
				rank: { value: '2', suffix: 'da' }
			}
		},
		'2017': {
			cirium: {
				cite: ciriumCite,
				label: ciriumPrize
			},
			oagLatam: {
				cite: 'https://www.bbc.com/mundo/noticias-38514302',
				label: 'Aerolínea más puntual de Latinoamérica.',
				rank: { value: '2', suffix: 'da' }
			},
			oag: {
				cite: 'https://www.bbc.com/mundo/noticias-38514302',
				label: 'Aerolínea más puntual del mundo.',
				rank: { value: '2', suffix: 'da' }
			}
		},
		'2018': {
			cirium: {
				cite: ciriumCite,
				label: ciriumPrize
			},
			oagLatam: {
				cite: 'https://www.oag.com/hubfs/free-reports/2018-reports/2018-punctuality-league/PunctualityReport2018.pdf',
				label: ciriumPrize
			},
			oag: {
				cite: 'https://www.oag.com/hubfs/free-reports/2018-reports/2018-punctuality-league/PunctualityReport2018.pdf',
				label: 'Aerolínea más puntual del mundo.',
				rank: { value: '4', suffix: 'ta' }
			}
		},
		'2019': {
			oag: {
				cite: 'https://www.oag.com/reports/punctuality-league-2019',
				label: 'Aerolínea más puntual del mundo.',
				trophy: true
			},
			cirium: {
				cite: ciriumCite,
				label: ciriumPrize
			},
			oagLatam: {
				cite: 'https://www.oag.com/reports/punctuality-league-2019',
				label: ciriumPrize
			}
		},
		'2020': {
			cirium: {
				cite: ciriumCite,
				label: ciriumPrize
			},
			oagLatam: {
				cite: 'https://www.oag.com/hubfs/free-reports/2020-reports/punctuality-league-2020/Punctuality-League-2020.pdf',
				label: ciriumPrize
			},
			oag: {
				cite: 'https://www.oag.com/hubfs/free-reports/2020-reports/punctuality-league-2020/Punctuality-League-2020.pdf',
				label: 'Aerolínea más puntual del mundo.',
				rank: { value: '2', suffix: 'da' }
			}
		},
		'2021': {
			cirium: {
				cite: ciriumCite,
				label: ciriumPrize
			}
		},
		'2023': {
			cirium: {
				cite: ciriumCite,
				label: ciriumPrize
			},
			oagLatam: {
				cite: 'https://www.oag.com/hubfs/free-reports/2023/OAG-Punctuality-League-2023.pdf',
				label: ciriumPrize
			},
			oag: {
				cite: 'https://www.oag.com/hubfs/free-reports/2023/OAG-Punctuality-League-2023.pdf',
				label: 'Aerolínea más puntual del mundo.',
				rank: { value: '8', suffix: 'va' }
			}
		},
		'2024': {
			cirium: {
				cite: ciriumCite,
				label: ciriumPrize
			}
		},
		'2025': {
			cirium: {
				cite: ciriumCite,
				label: ciriumPrize
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
							{#each Object.entries(prizes) as [prize, prizeDetails]}
								{@const { cite, label, rank, trophy } = prizeDetails}
								{@const logo = logos[prize as keyof typeof logos]}
								<PrizeQuote
									{cite}
									logo={logo ?? undefined}
								>
									{#if trophy}<span class="text-xl">🏆</span>{/if}
									{#if rank}{rank.value}<sup>{rank.suffix}</sup> {/if}{label}
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
