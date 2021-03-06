<template>
	<section class="task">
		<div class="container">
			<div class="task__item task-item">
				<div class="task-item__title">Сходи на тренировку
					в корнер Adidas!</div>
				<div class="task-item__location">Мега Белая Дача</div>
				<div class="task-item__date">18 марта, 18:00</div>
				<div class="task-item__bonus">
					<div class="btn">+150</div>
				</div>
			</div>
		</div>
	</section>
</template>


<style lang="sass">
.task
	margin: 0 0 em(25)
	&__item
		background: $color-dull_pink url(~/assets/img/task_bg.svg) no-repeat right bottom
		background-size: em(118)
		border-radius: em(3)
		padding: em(10) em(16)  
		min-height: em(118)
		position: relative
		.task-item
			&__title
				font:
					size: em(16)
					weight: bold
				line-height: em(22)
				margin: 0 0 em(14)
				max-width: em(155)
			&__location
				font-size: em(12)
				margin: 0 0 em(6)
				display: flex
				&::before
					content: ''
					display: inline-block
					width: em(16)
					height: em(16)
					background-size: em(16) !important
					background: url(~/assets/img/ic_location.svg) no-repeat center
					margin: 0 em(4) 0 0
			&__date
				font-size: em(12)
				display: flex
				&::before
					content: ''
					display: inline-block
					width: em(16)
					height: em(16)
					background-size: em(16) !important
					background: url(~/assets/img/ic_time.svg) no-repeat center
					margin: 0 em(4) 0 0
			&__bonus
				position: absolute
				bottom: em(14)
				right: em(16)
</style>