<template>
	<form class="login" @submit.prevent="submitData">
		<fieldset class="login__field">
			<p class="login__row">
				<label for="userEmail" class="login__label">
					<svg>
						<use xlink:href="@/assets/icons/icons.svg#email"></use>
					</svg>
				</label>
				<input 
					type="email" 
					id="userEmail" 
					class="login__input" 
					placeholder="E-mail" 
					v-model.trim="email"
				>
			</p>
			<p class="login__row">
				<label for="userPass" class="login__label">
					<svg>
						<use xlink:href="@/assets/icons/icons.svg#pass"></use>
					</svg>
				</label>
				<input 
					type="password" 
					id="userPass" 
					class="login__input" 
					placeholder="Password" 
					v-model.trim="password"
				>
			</p>
			<p class="login__actions">
				<a href="/login" class="login__act">
					<svg>
						<use xlink:href="@/assets/icons/icons.svg#signin"></use>
					</svg>
					<span>Sign in</span>
				</a>
				<a href="https://www.spotify.com" target="_blank" class="login__act">
					<svg>
						<use xlink:href="@/assets/icons/icons.svg#signup"></use>
					</svg>
					<span>Sign up</span>
				</a>
			</p>
		</fieldset>
	</form>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  components: {},
  data() {
	  return {
		  email: '',
		  password: ''
	  }
  },
  validations: {
	  email: {email, required},
	  password: {required, minLength: minLength(6)}
  },
  methods: {
	  submitData() {
		  if (this.$v.$invalid) {
			  this.$v.$touch()
			  return
		  }
		  this.$router.push('/')
	  }
  }
}
</script>
