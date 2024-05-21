<script>
	import { ScrollArea } from 'bits-ui';
	import { Header } from '$lib/components/site/header';
	import { Footer } from '$lib/components/site/footer';
	import '../app.css';
</script>

<ScrollArea.Root class="relative">
	<ScrollArea.Viewport>
		<ScrollArea.Content class="bg-backgound-paper text-grey-600">
			<Header />
			<main class="min-h-svh">
				<slot />
			</main>
			<Footer />
		</ScrollArea.Content>
	</ScrollArea.Viewport>
	<ScrollArea.Scrollbar
		orientation="vertical"
		class="flex h-full w-2.5 touch-none select-none rounded-full border-l border-l-transparent p-px transition-all hover:w-3 hover:bg-primary-ultradark"
	>
		<ScrollArea.Thumb
			class="relative flex-1 rounded-full bg-primary opacity-40 transition-opacity hover:opacity-100"
		/>
	</ScrollArea.Scrollbar>
</ScrollArea.Root>
