<template>
  <div id="app">
	<div class="wrapper">
		<div class="app-field">
			<Player />
			<div class="app-data">
				<div class="app-nav">
					<router-link to="/radio">
						<svg>
							<use xlink:href="@/assets/icons/icons.svg#radio"></use>
						</svg>
					</router-link>
					<router-link to="/likes">
						<svg>
							<use xlink:href="@/assets/icons/icons.svg#likes"></use>
						</svg>
					</router-link>
					<router-link to="/singers">
						<svg>
							<use xlink:href="@/assets/icons/icons.svg#singers"></use>
						</svg>
					</router-link>
					<router-link to="/albums">
						<svg>
							<use xlink:href="@/assets/icons/icons.svg#albums"></use>
						</svg>
					</router-link>
				</div>
				<div class="app-content">
					<transition name="fade" mode="out-in">
						<router-view/>
					</transition>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import Player from '@/components/Player.vue'

export default {
	components: {
		Player
	}
}
</script>
