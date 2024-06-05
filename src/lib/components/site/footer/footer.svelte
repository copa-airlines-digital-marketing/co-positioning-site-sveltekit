<script lang="ts">
	import {
		LogoCopaAirlines,
		LogoStarAlliance,
		SocialFacebook,
		SocialInstagram,
		SocialLinkedin,
		SocialX,
		SocialYoutube
	} from '$lib/components/icons';
	import SocialTiktok from '$lib/components/icons/social-tiktok.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Separator } from 'bits-ui';

	const year = new Date().getFullYear();

	const socials = [
		{
			icon: SocialFacebook,
			href: 'https://es-la.facebook.com/copaairlines/',
			title: 'Facebook'
		},
		{
			icon: SocialInstagram,
			href: 'https://www.instagram.com/copaairlines/',
			title: 'Instagram'
		},
		{
			icon: SocialLinkedin,
			href: 'https://www.linkedin.com/company/copa-airlines',
			title: 'LinkedIn'
		},
		{
			icon: SocialTiktok,
			href: 'https://www.tiktok.com/@copaairlines?lang=es',
			title: 'TikTok'
		},
		{
			icon: SocialX,
			href: 'https://x.com/copaairlines',
			title: 'X'
		},
		{
			icon: SocialYoutube,
			href: 'https://www.youtube.com/@copaairlines',
			title: 'YouTube'
		}
	] as const;

	const awards = [] as const;
</script>

<footer class="bg-grey-100">
	<div class="container mx-auto pb-20 pt-4 px-4 lg:px-0 lg:py-roomy flex flex-col gap-8">
		<div class="flex flex-col gap-4 md:flex-row">
			<LogoCopaAirlines class="text-primary w-44" />
			<Separator.Root
				orientation="vertical"
				class="hidden sm:block shrink-0 bg-grey-300 h-9 w-px"
			/>
			<LogoStarAlliance class="w-44" />
		</div>
		<div class="flex flex-col gap-normal md:flex-row md:justify-between md:items-end">
			<ul class="flex gap-2">
				<li>
					<Button
						href="https://www.copaair.com/es-co/legal/terminos-y-condiciones/politica-de-privacidad/"
						target="_blank"
						variant="transparent"
						size="slim"
					>
						Política de Privacidad
					</Button>
				</li>
				<li>
					<Button
						href="https://www.copaair.com/es-co/legal/terminos-y-condiciones/copa-airlines/"
						target="_blank"
						variant="transparent"
						size="slim"
					>
						Términos y condiciones de este sitio web
					</Button>
				</li>
			</ul>
			<nav>
				<h4 class="text-primary font-bold">Siguenos</h4>
				<ul class="flex gap-2 flex-wrap">
					{#each socials as social}
						{@const { icon, href, title } = social}
						<li>
							<Button variant="transparent" size="large" {href} {title} target="_blank">
								<svelte:component this={icon}></svelte:component>
							</Button>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
		<p class="text-xs">Copyright © {year} Copa Airlines, Inc. Todos los derechos reservados</p>
	</div>
</footer>
