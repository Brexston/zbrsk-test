<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__app footer-app">
				<a href="#" target="blank" class="footer-app__item">
					<img src="../assets/img/googleplay.svg" alt="Google Play">
				</a>
				<a href="#" target="blank" class="footer-app__item">
					<img src="../assets/img/appstore.svg" alt="App Store">
				</a>
			</div>
			<div class="footer__social footer-social">
				<a href="#" target="blank" class="footer-social__item">
					<img src="../assets/img/ic_fb.svg" alt="Facebook">
				</a>
				<a href="#" target="blank" class="footer-social__item">
					<img src="../assets/img/ic_vk.svg" alt="Vkontakte">
				</a>
				<a href="#" target="blank" class="footer-social__item">
					<img src="../assets/img/ic_inst.svg" alt="Instagram">
				</a>
				<a href="#" target="blank" class="footer-social__item">
					<img src="../assets/img/ic_yt.svg" alt="Youtube">
				</a>
			</div>
			<nav class="footer__nav footer-nav">
				<a href="#" class="footer-nav__item">Правила акции</a>
				<a href="#" class="footer-nav__item">Юридическая информация</a>
			</nav>
			<div class="footer__copyright">
				© 2010–2017 «ИКЕА Сентерс Рус Менеджмент»
			</div>
		</div>
	</footer>
</template>

<style lang="sass">


.footer
	&__app
		+flex(space-between)
		margin: 0 0 em(20)
		padding: 0 0 em(14)
		border-bottom: em(1) solid $color-whisper
		.footer-app
			&__item
				width: em(120)
				img
					width: 100%
	&__social
		+flex(space-between)
		margin: 0 0 em(20)
		padding: 0 0 em(20)
		border-bottom: em(1) solid $color-whisper
		.footer-social
			&__item
				width: em(29)
				img
					width: 100%
	&__nav
		margin: 0 0 em(16)
		padding: 0 0 em(16)
		border-bottom: em(1) solid $color-whisper
		.footer-nav
			&__item
				display: block
				text-decoration: none
				color: $color-black
				font:
					size: em(14)
					weight: bold
				line-height: em(18)
				&:not(:last-child)
					margin: 0 0 em(14)
	&__copyright
		margin: 0 0 em(18)
		font:
			size: em(12)
			weight: bold
		line-height: em(15)


</style>

