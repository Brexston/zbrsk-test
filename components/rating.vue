<template>
	<section class="rating">
		<div class="container">
			<div class="rating__prompt promt">
				<div class="prompt__bonus">
					<div class="btn">+150</div>
				</div>
				<div class="prompt__title">Расскажи о своем участии
					в проекте: получи +150 баллов
					и первое достижение!
				</div>
				<div class="prompt__share">Поделиться!</div>
			</div>
		</div>
	</section>
</template>


<style lang="sass">
.rating
	min-height: em(185)
	background: $color-lavender 
	padding: em(25) 0 em(46) 
	margin: 0 0 em(25)
	&__prompt
		width: 100%
		border-radius: em(12)
		border: em(2) solid $color-crayola
		background: $color-white
		position: relative
		.prompt
			&__bonus
				position: absolute
				left: 0
				right: 0
				top: em(-14)
				.btn
					margin: 0 auto
			&__title
				padding: em(15) em(35) em(33)
				font-size: em(15)
				line-height: em(22)
				text-align: center
			&__share
				width: em(170)
				height: em(44)
				background: $color-crayola
				border-radius: em(22.5)
				+flex(center,center)
				font:
					size: em(16)
					weight: bold
				color: $color-white
				position: absolute
				left: 0
				right: 0
				margin: 0 auto
				bottom: em(-22)
				cursor: pointer 
</style>
