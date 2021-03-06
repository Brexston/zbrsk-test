<template>
	<section class="categories">
		<div class="container">
			<div class="categories__title">
				Выбери категорию, чтобы перейти к заданиям
			</div>
			<div class="categories__items categories-items">
				<a href="#" class="categories-items__item categories-items__item_red">На стиле</a>
				<a href="#" class="categories-items__item categories-items__item_orange">Жить активнее</a>
				<a href="#" class="categories-items__item categories-items__item_green">Просто и красиво</a>
				<a href="#" class="categories-items__item categories-items__item_blue">Хюгге</a>
				<a href="#" class="categories-items__item categories-items__item_cyan">Время — детям</a>
			</div>
		</div>
	</section>
</template>


<style lang="sass">
.categories
	margin: 0 0 em(25)
	&__title
		font:
			size: em(16)
			weight: bold
		margin: 0 0 em(25)
		padding: 0 em(20) 0 0
		line-height: em(22)
	&__items
		.categories-items
			&__item
				+flex(flex-start,center)
				height: em(44)
				border-radius: em(22)
				text-transform: uppercase
				padding: 0 em(20)
				background: $color-whisper
				text-decoration: none
				color: $color-white
				font-weight: bold
				&:not(:last-child)
					margin: 0 0 em(2)
				&::after
					content: ''
					width: em(20)
					height: em(20)
					background: url(~/assets/img/ic_arrow.svg) no-repeat
					background-size: em(20)
					margin-left: auto
				&_red
					background: linear-gradient(270deg, #F6A997 0%, #CB5433 100%)
				&_orange
					background: linear-gradient(270deg, #F5D854 3.33%, #E97800 100%)
				&_green
					background: linear-gradient(90deg, #6BA860 0%, #80C5A1 100%)
				&_blue
					background: linear-gradient(90deg, #5698C4 0%, #AAD2BF 98.78%)
				&_cyan
					background: linear-gradient(90deg, #475C6E 0.7%, #B6D1E8 96.67%)

</style>
