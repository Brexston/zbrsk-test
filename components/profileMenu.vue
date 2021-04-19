<template>
	<transition name="slide-fade">
		<div class="header__nav header-nav" v-if="isPanelOpen">
			<div class="header-nav__profile">
				<div class="header-nav__profile-avatar">
					<img src="../assets/img/avatar.svg" alt="icon">
				</div>
				<div class="header-nav__profile-content">
					<span>Южная Анастасия </span>
					<span>+7 (985) 435-32-32</span>
				</div>
			</div>
			<div class="header-nav__menu">
				<a href="#" class="header-nav__menu-item header-nav__menu-item_task">Задания</a>
				<a href="#" class="header-nav__menu-item header-nav__menu-item_rating">Рейтинг</a>
				<a href="#" class="header-nav__menu-item header-nav__menu-item_achievements">Достижения</a>
				<a href="#" class="header-nav__menu-item header-nav__menu-item_prize">Призы</a>
			</div>
			<div class="header-nav__help">
				Поддержка
			</div>
		</div>
	 </transition>
</template>

<script>
	import { store, mutations } from '@/store/store.js'

    export default {
        computed: {
            isPanelOpen() {
            	return store.isProfileOpen
            }
        }
    }
</script>

<style lang="sass">
.header
	&__nav
		transition: 0.3s
		position: absolute
		top: em(60)
		margin: 0 em(-20)
		width: 100%
		height: 100vh
		background: linear-gradient(270deg, #C9B0B9 0%, #95B7D8 100%)
		z-index: 10
		padding: em(23) em(20) em(26)
		overflow: auto
		.header-nav
			&__profile
				+flex
				margin: 0 0 em(44)
				&-avatar
					width: em(48)
					height: em(48)
					margin: 0 em(16) 0 0
					img
						width: 100%
				&-content
					color: $color-white
					font:
						size: em(16)
						weight: bold
					line-height: em(22)
					span
						display: block
			&__menu
				&-item
					font:
						size: em(16)
						weight: bold
					color: $color-white
					text:
						transform: uppercase
						decoration: none
					display: block
					padding: 0 0 em(17)
					margin: 0 0 em(19)
					border-bottom: em(2) solid $color-whisper
					+flex(flex-start, center)
					&::before
						content: ''
						width: em(24)
						height: em(24)
						margin: 0 em(10) 0 0
						background-size: em(24) !important
						display: block
					&_task
						&::before
							background: url(~/assets/img/ic_task.svg) no-repeat
					&_rating
						&::before
							background: url(~/assets/img/ic_rating.svg) no-repeat
					&_achievements
						&::before
							background: url(~/assets/img/ic_achievements.svg) no-repeat
					&_prize
						&::before
							background: url(~/assets/img/ic_prize.svg) no-repeat
			&__help
				font:
					size: em(16)
					weight: bold
				color: $color-white
				+flex(flex-start, center)
				margin: em(130) 0 0 0
				&::before
						content: ''
						width: em(24)
						height: em(24)
						margin: 0 em(10) 0 0
						background-size: em(24) !important
						display: block
						background: url(~/assets/img/ic_info.svg) no-repeat
	.slide-fade-enter-active 
		transition: all .3s ease

	.slide-fade-leave-active 
		transition: all .3s ease

	.slide-fade-enter, .slide-fade-leave-to
		transform: translateX(10px)
		opacity: 0


</style>