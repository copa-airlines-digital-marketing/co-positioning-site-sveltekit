<script lang="ts">
	import { writable } from 'svelte/store';
	import { onDestroy } from 'svelte';
	import { type CarouselAPI, type CarouselProps, setEmblaContext } from './context.js';
	import { cn } from '$lib/utils.js';

	type $$Props = CarouselProps;

	export let opts = {};
	export let plugins: NonNullable<$$Props['plugins']> = [];
	export let api: $$Props['api'] = undefined;
	export let orientation: NonNullable<$$Props['orientation']> = 'horizontal';

	let className: $$Props['class'] = undefined;
	export { className as class };

	type Mode = 'playing' | 'paused';

	let playingState: Mode = 'paused';

	const apiStore = writable<CarouselAPI | undefined>(undefined);
	const orientationStore = writable(orientation);
	const canScrollPrev = writable(false);
	const canScrollNext = writable(false);
	const optionsStore = writable(opts);
	const pluginStore = writable(plugins);
	const scrollSnapsStore = writable<number[]>([]);
	const selectedIndexStore = writable(0);

	$: orientationStore.set(orientation);
	$: pluginStore.set(plugins);
	$: optionsStore.set(opts);

	const scrollPrev = () => {
		api?.scrollPrev();
		if (!api) return;
		$selectedIndexStore = api.selectedScrollSnap();

		const autoplay = api.plugins()?.autoplay;

		if (!autoplay) return;

		const stopOnInteraction = autoplay.options.stopOnInteraction;

		if (!stopOnInteraction || typeof stopOnInteraction !== 'boolean') return;

		const resetOrStop = stopOnInteraction ? autoplay.stop : autoplay.false;

		if (!resetOrStop || typeof resetOrStop !== 'function') return;

		resetOrStop();
	};
	function scrollNext() {
		api?.scrollNext();

		if (!api) return;
		$selectedIndexStore = api.selectedScrollSnap();

		const autoplay = api.plugins()?.autoplay;

		if (!autoplay) return;

		const stopOnInteraction = autoplay.options.stopOnInteraction;

		if (!stopOnInteraction || typeof stopOnInteraction !== 'boolean') return;

		const resetOrStop = stopOnInteraction ? autoplay.stop : autoplay.false;

		if (!resetOrStop || typeof resetOrStop !== 'function') return;

		resetOrStop();
	}
	function scrollTo(index: number, jump?: boolean) {
		api?.scrollTo(index, jump);
		if (!api) return;
		$selectedIndexStore = api.selectedScrollSnap();

		const autoplay = api.plugins()?.autoplay;

		if (!autoplay) return;

		const stopOnInteraction = autoplay.options.stopOnInteraction;

		if (!stopOnInteraction || typeof stopOnInteraction !== 'boolean') return;

		const resetOrStop = stopOnInteraction ? autoplay.stop : autoplay.false;

		if (!resetOrStop || typeof resetOrStop !== 'function') return;

		resetOrStop();
	}

	function onSelect(api: CarouselAPI) {
		if (!api) return;
		$selectedIndexStore = api.selectedScrollSnap();
		canScrollPrev.set(api.canScrollPrev());
		canScrollNext.set(api.canScrollNext());
	}

	function togglePlayStop() {
		if (!api) return;

		const autoplay = api.plugins()?.autoplay;

		if (!autoplay) return;

		const isPlaying = autoplay.isPlaying;
		const play = autoplay.play;
		const stop = autoplay.stop;

		if (!isPlaying || typeof isPlaying !== 'function') return;
		if (!play || typeof play !== 'function') return;
		if (!stop || typeof stop !== 'function') return;

		playingState = isPlaying() ? stop() : play();
	}

	function autoPlayReset() {
		if (!api) return;

		const autoplay = api.plugins()?.autoplay;

		if (!autoplay) return;

		const reset = autoplay.reset;

		if (!reset || typeof reset !== 'function') return;

		reset();
	}

	const updatePlayingState = (api: CarouselAPI) => {
		if (!api) return;

		const autoplay = api.plugins()?.autoplay;

		if (!autoplay) return;

		const isPlayingFn = autoplay.isPlaying;

		if (!isPlayingFn || typeof isPlayingFn !== 'function') return;

		const isPlaying = isPlayingFn();

		isPlaying === true ? startPlaying() : stopPlaying();

		return;
	};

	const onReInit = (api: CarouselAPI) => {
		onSelect(api);
		updatePlayingState(api);
	};

	const stopPlaying = () => (playingState = 'paused');

	const startPlaying = () => (playingState = 'playing');

	$: if (api) {
		onSelect(api);
		updatePlayingState(api);
		api.on('init', onReInit);
		api.on('select', onSelect);
		api.on('autoplay:play', startPlaying);
		api.on('autoplay:stop', stopPlaying);
		api.on('reInit', onReInit);
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			scrollPrev();
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			scrollNext();
		}
	}

	setEmblaContext({
		api: apiStore,
		orientation: orientationStore,
		scrollPrev,
		scrollNext,
		togglePlayStop,
		autoPlayReset,
		canScrollNext,
		canScrollPrev,
		handleKeyDown,
		options: optionsStore,
		plugins: pluginStore,
		onInit,
		scrollTo,
		scrollSnapList: scrollSnapsStore,
		selectedIndex: selectedIndexStore
	});

	function onInit(event: CustomEvent<CarouselAPI>) {
		api = event.detail;
		apiStore.set(api);
		scrollSnapsStore.set(api.scrollSnapList());
	}

	onDestroy(() => {
		if (!api) return;

		api.off('init', onReInit);
		api.off('select', onSelect);
		api.off('autoplay:play', updatePlayingState);
		api.off('autoplay:stop', updatePlayingState);
		api.off('reInit', onReInit);
	});
</script>

<div
	class={cn(className)}
	on:mouseenter
	on:mouseleave
	role="region"
	aria-roledescription="carousel"
	{...$$restProps}
>
	<slot {playingState} selected={$selectedIndexStore} />
</div>
