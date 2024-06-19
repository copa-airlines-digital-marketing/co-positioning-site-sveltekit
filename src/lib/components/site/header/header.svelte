<script lang="ts">
	import { LogoCopaAirlines } from '$lib/components/icons';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	const sections = [
		{ href: '#top', text: 'Inicio' },
		{ href: 'https://destinationsguide.copaair.com/es-co/', target: '_blank', text: 'Destinos' },
		//{ href: '#reserva', text: 'Reserva' },
		{ href: '#a-bordo', text: 'A Bordo' },
		{ href: '#nosotros', text: 'Nosotros' }
	];
</script>

<header class={cn('w-full bg-primary')}>
	<div class="container flex items-center justify-center md:justify-between h-16 mx-auto relative">
		<Button
			href="#main"
			variant="transparent"
			size="slim"
			class={cn('absolute top-full left-0 opacity-0 focus-visible:opacity-100 z-20')}
			>Saltar navegación</Button
		>
		<Button
			href="https://www.copaair.com/es-co/"
			target="_blank"
			title="Ir al sitio principal"
			class="shrink"
		>
			<LogoCopaAirlines class={cn('w-full max-w-52 h-auto')}></LogoCopaAirlines>
		</Button>
		<nav
			class="portrait:fixed md:hidden bottom-0 left-0 w-full landscape:w-auto bg-primary h-16 z-40"
		>
			<ul class={cn('flex items-center justify-center container mx-auto md:max-w-none h-full')}>
				{#each sections as section}
					{@const { href, text, target } = section}
					<li class="shrink-0">
						<Button {href} class="text-xs" {target}>
							{text}
						</Button>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
