<template>
	<section class="rewards">
		<div class="container">
			<div class="rewards__title">
				Меняй баллы на призы!
			</div>
			<div class="rewards__tabs rewards-tabs">
				<div class="rewards-tabs__item">Зарезервировано</div>
				<div class="rewards-tabs__item active">Доступные призы</div>
			</div>
			<div class="rewards__content rewards-content">
				<div class="rewards-content__item rewards-content-item">
					<div class="rewards-content-item__avatar">
						<img src="../assets/img/ic_lady_small.png" alt="Lady">
					</div>
					<div class="rewards-content-item__txt">
						<div class="rewards-content-item__txt-category">Аксессуар</div>
						<div class="rewards-content-item__txt-title">LADY COLLECTION</div>
						<a href="#" class="rewards-content-item__txt-link">Забрать в магазине</a>
					</div>
					<div class="rewards-content-item__bonuses btn">
						150
					</div>
				</div>
				<div class="rewards-content__item rewards-content-item">
					<div class="rewards-content-item__avatar">
						<img src="../assets/img/ic_sb_small.png" alt="Lady">
					</div>
					<div class="rewards-content-item__txt">
						<div class="rewards-content-item__txt-category">Кроссовки</div>
						<div class="rewards-content-item__txt-title">STREET BEAT</div>
						<a href="#" class="rewards-content-item__txt-link">Забрать в магазине</a>
					</div>
					<div class="rewards-content-item__bonuses btn">
						350
					</div>
				</div>
			</div>
			<div class="rewards__subtitle">
				Больше баллов и призов — в приложении!
			</div>
		</div>
	</section>
</template>


<style lang="sass">
.rewards
	margin: 0 0 em(15)
	&__title
		margin: 0 0 em(25)
		font:
			size: em(24)
			weight: bold
	&__tabs
		+flex(space-between)
		border-bottom: em(1) solid $color-whisper
		.rewards-tabs
			&__item
				font-size: em(14)
				line-height: em(22)
				font-weight: bold
				padding: 0 0 em(16)
				&.active
					color: $color-crayola_light
					border-bottom: em(2) solid $color-crayola_light
	&__content
		margin: 0 0 em(11)
		.rewards-content
			&__item
				padding: em(26) 0 em(29)
				border-bottom: em(1) solid $color-whisper
				+flex()
				.rewards-content-item
					&__avatar
						width: em(70)
						height: em(70)
						margin: 0 em(20) 0 0
						background: $color-whisper
						img
							width: 100%
					&__txt
						&-category
							font-size: em(14)
							line-height: em(18)
							margin: 0 0 em(3)
						&-title
							font:
								size: em(12)
								weight: bold
							line-height: em(15)
							text-transform: uppercase
							margin: 0 0 em(3)
						&-link
							font:
								size: em(12)
								weight: bold
							line-height: em(18)
							color: $color-crayola_light
					&__bonuses
						margin-left: auto
	&__subtitle
		font:
			size: em(14)
			weight: bold
		line-height: em(21)
</style>
