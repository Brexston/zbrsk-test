<template>
	<header class="header">
		<div class="container">
			<div class="header__hamburger hamburger">
				<div class="hamburger__item hamburger__item-one"></div>
				<div class="hamburger__item hamburger__item-two"></div>
				<div class="hamburger__item hamburger__item-three"></div>
			</div>
			<div class="header__profile profile">
				<div class="profile__status">
					<img src="../assets/img/icon.svg" alt="icon">
					<span>Мегамодник</span>
				</div>
				<div class="profile__bonuses btn">200</div>
				<div class="profile__avatar"
				:class="{ 'active' : isProfileActive }"
         		@click.prevent="toggleProfile"
				>
					<img src="../assets/img/avatar.svg" alt="icon">
				</div>
			</div>
			<profileMenu/>
		</div>
	</header>
</template>

<script>
	import profileMenu from '@/components/profileMenu'
	import { store, mutations } from '@/store/store.js'

	export default {
		components: {
			profileMenu,
		},
	
	    computed: {
            isProfileActive() {
            	return store.isProfileOpen
            }
        },

	    methods: {
	        toggleProfile() {
	            mutations.toggleProfile()
	            this.setBodyClass()
	        },
	        setBodyClass() {
			    var body = document.body
			    body.classList.toggle('noscroll')
			}
	    },
   
	}
</script>

<style lang="sass">
.header
	height: em(60)
	width: 100%
	.container
		+flex(space-between,center)
		height: inherit
	&__hamburger
		position: relative
		width: em(24)
		height: em(20)
		.hamburger
			&__item
				height: em(2)
				background-color: $color-black
				position: absolute
				left: 0
				transition: all 0.3s
				&-one
					width: em(24)
					top: 0
				&-two
					width: em(14)
					top: 50%
					transform: translateY(-50%)
				&-three
					width: em(19)
					bottom: 0
	&__profile
		+flex(flex-start,center)
		.profile
			&__status
				+flex(flex-start,center)
				span
					color: $color-crayola
					font:
						size: em(12)
						weight: bold
					margin: 0 0 0 em(6)
				img
					width: em(23.24)
					height: em(23.24)
			&__bonuses
				margin: 0 0 0 em(10)
			&__avatar
				margin: 0 0 0 em(10)
				border-radius: 50%
				background: $color-whisper
				height: em(32)
				width: em(32)
				img
					width: 100%
					height: 100%
					border-radius: inherit


</style>