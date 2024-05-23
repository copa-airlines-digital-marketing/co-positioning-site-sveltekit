<script>
	import { ScrollArea } from 'bits-ui';
	import { Footer } from '$lib/components/site/footer';
	import '../app.css';
</script>

<ScrollArea.Root type="scroll" class="relative h-svh scroll-smooth">
	<ScrollArea.Viewport class="h-full w-full scroll-smooth">
		<ScrollArea.Content class="bg-backgound-paper text-grey-600 scroll-smooth">
			<main class="min-h-svh">
				<slot />
			</main>
			<Footer />
		</ScrollArea.Content>
	</ScrollArea.Viewport>
	<ScrollArea.Scrollbar
		orientation="vertical"
		class="flex h-full w-2.5 touch-none select-none border-l border-l-transparent p-px transition-all hover:w-5"
	>
		<ScrollArea.Thumb
			class="relative flex-1 bg-primary-light opacity-40 transition-opacity hover:opacity-100"
		/>
	</ScrollArea.Scrollbar>
</ScrollArea.Root>
