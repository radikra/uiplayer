<template>
	<div class="player-block">
		<div class="player">
			<div class="player__inner">
				<div class="player__display display">
					<div class="display__outer">
						<div class="display__inner">
							<p class="display__channel">
								<svg class="display-icon">
									<use xlink:href="@/assets/icons/icons.svg#logo"></use>
								</svg>
							</p>
							<p class="display__frequency">No user</p>
							<p class="display__mode">
								<svg class="display-icon">
									<use xlink:href="@/assets/icons/icons.svg#power"></use>
								</svg>
							</p>
						</div>
					</div>
				</div>
				<div class="player__control">
					<button class="player__btn">
						<svg class="btn-icon">
							<use xlink:href="@/assets/icons/icons.svg#prev"></use>
						</svg>
					</button>
					<button class="player__btn">
						<svg class="btn-icon" :class="{'btn-icon_active': authorized || playing}" v-show="!paused">
							<use xlink:href="@/assets/icons/icons.svg#play"></use>
						</svg>
						<svg class="btn-icon btn-icon_active" v-show="authorized && !playing">
							<use xlink:href="@/assets/icons/icons.svg#pause"></use>
						</svg>
					</button>
					<button class="player__btn">
						<svg class="btn-icon">
							<use xlink:href="@/assets/icons/icons.svg#next"></use>
						</svg>
					</button>
					<button class="player__btn">
						<svg class="btn-icon" :class="{'btn-icon_active': shuffle}">
							<use xlink:href="@/assets/icons/icons.svg#random"></use>
						</svg>
					</button>
					<button class="player__btn">
						<svg class="btn-icon" :class="{'btn-icon_active': repeat}">
							<use xlink:href="@/assets/icons/icons.svg#repeat"></use>
						</svg>
					</button>
				</div>
				<div class="player__buttons">
					<router-link to="/login" class="player__btn">
						<svg class="btn-icon btn-icon_noauth">
							<use xlink:href="@/assets/icons/icons.svg#power"></use>
						</svg>
					</router-link>
					<button class="player__btn">
						<svg class="btn-icon">
							<use xlink:href="@/assets/icons/icons.svg#star"></use>
						</svg>
					</button>
					<button class="player__btn">
						<svg class="btn-icon">
							<use xlink:href="@/assets/icons/icons.svg#equalizer"></use>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Player',
	data() {
		return {
			authorized: false,
			playing: false,
			paused: false,
			shuffle: false,
			repeat: false
		}
	},
	computed: {
	},
	methods: {
	},
	mounted() {
	}
}
</script>
