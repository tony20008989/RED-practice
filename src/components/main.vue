<template lang='pug'>
.body
  .navbar.py-sm-5.pt-5.pb-3
    .navbar__logo.col
      img(src = 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/Jevelin_logo_dark.png')
    .navbar__nav.row
      .navbar__nav--title.col.mx-sm-1.d-none.d-sm-block Home
      .navbar__nav--title.col.mx-sm-1.d-none.d-sm-block Shop
      .navbar__nav--title.col.mx-sm-1.d-none.d-sm-block Decor
      .navbar__nav--title.col.mx-sm-1.d-none.d-sm-block Plant
      .navbar__nav--title.col.mx-sm-1.d-none.d-sm-block Light
      .navbar__nav--title.col.mx-sm-1.d-none.d-sm-block Chair
    .navbar__function.fs-5.col.d-flex.justify-content-end
      .navbar__function--icon.d-none.d-sm-block.col-1
        .fab.fa-facebook-f
      .navbar__function--icon.d-none.d-sm-block.col-1
        .fab.fa-twitter
      .navbar__function--icon.d-none.d-sm-block.col-1
        .fab.fa-instagram
      .navbar__function--icon.d-none.d-sm-block.col-1
        .fas.fa-search
      .navbar__function--icon.d-block.d-sm-none.col-3
        .fas.fa-bars
      .navbar__function--icon.col-1
        .fas.fa-shopping-cart
  .navbar__border.border-bottom.d-block.d-sm-none
  .cover
    .cover__banner.d-flex.flex-sm-row.flex-column
      .banner__description.col-xxl-6.d-flex.flex-column.justify-content-between
        div
          .banner__description--tag.px-3.py-1.d-inline-flex New collection
          .banner__description--title.my-sm-4.my-5.display-3 Fill your home with uniqueness
          .banner__description--subtitle.fs-4 Huge variety with modern glamour!
        .banner__description--explore.mb-5.d-flex.flex-row.align-items-center
          .me-2 explore
          .fas.fa-angle-down.text-muted
      .banner__picture.col-xxl-6
        img(src = 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/inside-weather-E5lK_COkD2E-unsplash-copy.jpg')
  .cover__tips.border-bottom.d-sm-flex.justify-content-center.flex-wrap
    .d-inline ! Use discount code: FIRSTIME to get
    .cover__tips--discount.d-inline.mx-sm-2.mx-1 10% off
    .d-inline your first order !
  .content.d-flex.flex-column.align-items-center.justify-content-center
    .content__product.d-flex.justify-content-center.flex-wrap.justify-content-sm-between
      .content__Light.d-flex.flex-column.align-items-center.justify-content-center
        .content__Light--tag.px-3.py-1 New collection
        .content__Light--title.d-flex.flex-column.align-items-center.justify-content-center
          div Lights &
          div Decor
        .content__Light--show.d-flex.flex-direction-row.align-items-center
          .me-2 Show more
          .fas.fa-angle-right
      .content__Kitchen.d-flex.flex-column.align-items-center.justify-content-center
        .content__Kitchen--title.d-flex.flex-column.align-items-center.justify-content-center
          div Kitchen
          div Cutlery
        .content__Kitchen--show.d-flex.flex-direction-row.align-items-center
          .me-2 Show more
          .fas.fa-angle-right
      .content__LivingRoom.d-flex.flex-column.align-items-center.justify-content-center
        .content__LivingRoom--tag.px-3.py-1 Sale
        .content__LivingRoom--title.d-flex.flex-column.align-items-center.justify-content-center
          div Living
          div Room
        .content__LivingRoom--show.d-flex.flex-direction-row
          .me-2 Show more
          .fas.fa-angle-right
    .content__brand.d-flex.flex-row.align-items-center
      .content__brand--logobar.d-flex.align-items-center.justify-content-center
        .content__brand--logo.d-none.d-sm-block
          img(src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/Partners6-copy.png")
      .content__brand--logobar.d-flex.align-items-center.justify-content-center
        .content__brand--logo.d-none.d-sm-block
          img(src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/Partners1-copy.png")
      .content__brand--logobar.d-flex.align-items-center.justify-content-center
        .content__brand--logo.d-none.d-sm-block
          img(src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/Partners4-copy.png")
      .content__brand--logobar.d-flex.align-items-center.justify-content-center
        .content__brand--logo.d-none.d-sm-block
          img(src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/Partners2-copy.png")
      .content__brand--logobar.d-flex.align-items-center.justify-content-center
        .content__brand--logo.d-none.d-sm-block
          img(src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/Partners3-copy.png")
      .content__brand--logobar.d-flex.align-items-center.justify-content-center
        .content__brand--logo
          img(src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/Partners5-copy.png")
  .cover2.d-flex.flex-column.flex-sm-row.align-items-center.justify-content-center
    .cover2__img
      img(src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/Ellipse-622-copy-3.png")
    .cover2__word.d-flex.flex-sm-column.flex-wrap
      .cover2__word--subtitle Our special offer
      .cover2__word--title featured products with amazing color variety for your home
      button.cover2__word--button Purchase
  .featured.d-flex.flex-sm-row.flex-column
    .featured__box.d-flex.justify-content-center.align-items-center.flex-column
      .featured__box--icon.far.fa-clock
      .featured__box--title 24 h Shipping
      .featured__box--content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo felis, consectetur id elit id.
    .featured__box.middle.d-flex.justify-content-center.flex-column.align-items-center
      .featured__box--icon.fas.fa-truck
      .featured__box--title Free Returns
      .featured__box--content.justify-content-center Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo felis, consectetur id elit id.
    .featured__box.d-flex.justify-content-center.flex-column.align-items-center
      .featured__box--icon.fas.fa-wallet
      .featured__box--title 100% Money Back Guarantee
      .featured__box--content.justify-content-center Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo felis, consectetur id elit id.
  .cover3.d-flex.justify-content-center.align-items-center.flex-column
    .cover3__title.d-flex.justify-content-center Ideas for inspiration
    .cover3__image
      img(src = 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/Hue_Saturation-2.jpg')
    .cover3__content.d-flex.flex-sm-row.flex-column.d-flex.justify-content-sm-between
      .content__title.d-flex.flex-column
        .content__title--title Find the closest store to your location
        .content__title--subtitle Quisque ut aliquam nunc, at finibus ante. Sed dignissim, nulla a fermentum egestas, odio
      .content__button.d-flex.justify-content-center.align-items-center Find now
  .shop.d-flex.d-flex.flex-column.align-items-center.border-bottom
    .shop__title.d-flex.flex-column.align-items-center Great deals for great prices
    .shop__mall.d-flex.flex-sm-wrap.flex-sm-row.flex-column.align-items-center.justify-content-sm-between
      .shop__commodity
        .shop__commodity--commodity
          img(src = 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0011_jeremy-lwanga-uUwEAW5jFLE-unsplash-300x300.jpg')
        .shop__commodity--content.d-flex.flex-row.justify-content-between
          .shop__commodity--name Table succulent plant
          .shop__commodity--buy.fas.fa-shopping-cart
        .shop__commodity--price 5.00
      .shop__commodity
        .shop__commodity--commodity
          img(src = 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0010_sincerely-media-VDPauwJ_sHo-unsplash-300x300.jpg')
        .shop__commodity--content.d-flex.flex-row.justify-content-between
          .shop__commodity--name Metallic sidetable lamp
          .shop__commodity--buy.fas.fa-shopping-cart
        .shop__commodity--price 5.00
      .shop__commodity
        .shop__commodity--commodity
          img(src = 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0009_minh-pham-Wn1gmozpNZc-unsplash-300x300.jpg')
        .shop__commodity--content.d-flex.flex-row.justify-content-between
          .shop__commodity--name Wooden picture frame
          .shop__commodity--buy.fas.fa-shopping-cart
        .shop__commodity--price 5.00
      .shop__commodity
        .shop__commodity--commodity
          img(src = 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0008_minh-pham-7pCFUybP_P8-unsplash-300x300.jpg')
        .shop__commodity--content.d-flex.flex-row.justify-content-between
          .shop__commodity--name Bedroom mirror
          .shop__commodity--buy.fas.fa-shopping-cart
        .shop__commodity--price 5.00
      .shop__commodity
        .shop__commodity--commodity
          img(src = 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0007_christopher-burns-56tCOHi5OzA-unsplash-300x300.jpg')
        .shop__commodity--content.d-flex.flex-row.justify-content-between
          .shop__commodity--name Minimalistic chair
          .shop__commodity--buy.fas.fa-shopping-cart
        .shop__commodity--price 5.00
      .shop__commodity
        .shop__commodity--commodity
          img(src = 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0006_kari-shea-3_cyj5YkhTs-unsplash-300x300.jpg')
        .shop__commodity--content.d-flex.flex-row.justify-content-between
          .shop__commodity--name Cactus succulent plant
          .shop__commodity--buy.fas.fa-shopping-cart
        .shop__commodity--price 5.00
      .shop__commodity
        .shop__commodity--commodity
          img(src = 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0005_stephanie-harvey-80xePqQVKzs-unsplash-300x300.jpg')
        .shop__commodity--content.d-flex.flex-row.justify-content-between
          .shop__commodity--name Decorative pillow
          .shop__commodity--buy.fas.fa-shopping-cart
        .shop__commodity--price 5.00
      .shop__commodity
        .shop__commodity--commodity
          img(src = 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0004_bedroom-bulb-interior-decoration-lamp-545048-300x300.jpg')
        .shop__commodity--content.d-flex.flex-row.justify-content-between
          .shop__commodity--name Metallic table lamp
          .shop__commodity--buy.fas.fa-shopping-cart
        .shop__commodity--price 5.00
  .describe.d-flex.justify-content-between.flex-column.justify-content-center.align-items-center
    .describe__title Join the newsletter
    .describe__subtitle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
    .describe__input.d-flex.flex-column.flex-sm-row.align-items-center
      input(placeholder = 'Please enter your email here...').describe__input--input
      button.describe__input--button Subscribe
</template>
<style lang = 'sass'>
.body
  font-family: Montserrat
  .navbar
    margin-left: 56px
    margin-right: 56px
    .navbar__logo
    .navbar__nav
      font-size: 14px
      font-weight: 600
      .navbar__nav--title
    .navbar__function
      .navbar__function--icon
  .navbar__border
    height: 0px
    margin-bottom: 20px
  .cover
    margin-left: 56px
    margin-right: 56px
    .cover__banner
      .banner__description
        background-color: rgb(246,246,246)
        padding-top: 230px
        padding-left: 90px
        padding-right: 30px
        .banner__description--tag
          font-weight: 700
          background-color: black
          color: white
          border-radius: 15px
          font-size: 14px
        .banner__description--title
          font-weight: 600
        .banner__description--subtitle
          font-weight: 600
          color: rgb(108, 108, 108)
          margin-bottom: 200px
        .banner__description--explore
          font-weight: 700
      .banner__picture
        padding: 0px
        img
          width: 100%
          background-size: contain
  .cover__tips
    padding-bottom: 30px
    padding-top: 30px
    font-size: 18px
    font-weight: 550
    color: #5a5a5a
    .cover__tips--discount
      color: #ff7012
  .content
    .content__product
      padding-top: 60px
      .content__Light
        background-image: url('http://jevelin.shufflehound.com/minimal-furniture-shop/wp-content/uploads/sites/42/2018/03/Layer-673.jpg?id=495')
        background-repeat: no-repeat
        background-size: contain
        width: 380px
        height: 490px
        padding-right: 75px
        padding-left: 75px
        .content__Light--tag
          font-size: 14px
          font-weight: 700
          color: white
          background-color: black
          border-radius: 15px
        .content__Light--title
          padding-top: 27px
          padding-bottom: 50px
          font-weight: 600
          font-size: 35px
        .content__Light--show
          font-weight: 700
          font-size: 14px
      .content__Kitchen
        background-image: url('http://jevelin.shufflehound.com/minimal-furniture-shop/wp-content/uploads/sites/42/2018/03/Layer-675-copy-2.jpg?id=497')
        background-repeat: no-repeat
        background-size: contain
        width: 380px
        height: 490px
        padding-right: 75px
        padding-left: 75px
        .content__Kitchen--title
          margin-top: 26px
          padding-top: 27px
          padding-bottom: 50px
          font-weight: 600
          font-size: 35px
        .content__Kitchen--show
          font-weight: 700
          font-size: 14px
      .content__LivingRoom
        background-image: url('http://jevelin.shufflehound.com/minimal-furniture-shop/wp-content/uploads/sites/42/2018/03/Layer-674.jpg?id=496')
        background-repeat: no-repeat
        background-size: contain
        width: 380px
        height: 490px
        padding-right: 75px
        padding-left: 75px
        .content__LivingRoom--tag
          font-size: 14px
          font-weight: 700
          color: white
          background-color: orange
          border-radius: 15px
        .content__LivingRoom--title
          padding-top: 27px
          padding-bottom: 50px
          font-weight: 600
          font-size: 35px
        .content__LivingRoom--show
          font-weight: 700
          font-size: 14px
    .content__brand
      margin-left: 56px
      margin-right: 56px
      padding-top: 80px
      padding-bottom: 80px
      .content__brand--logobar
        text-align: center
        width: 170px
        height: 60px
  .cover2
    background-color: #f6f6f6
    padding-left: 160px
    padding-right: 160px
    .cover2__img
      width: 299px
      height: 612px
      margin-right: 150px
      margin-left: 150px
      margin-top: 35px
    .cover2__word
      padding-right: 130px
      padding-left: 130px
      .cover2__word--subtitle
        font-size: 20px
        font-weight: 400
      .cover2__word--title
        margin-top: 20px
        margin-bottom: 55px
        font-size: 35px
        font-weight: 600
      .cover2__word--button
        width: 134px
        height: 50px
        padding-right: 28px
        padding-left: 28px
        border-radius: 3px
        background-color: black
        color: white
  .featured
    padding-top: 90px
    padding-right: 160px
    padding-left: 160px
    padding-bottom: 140px
    .featured__box
      padding-top: 35px
      padding-right: 15px
      padding-left: 15px
      &.middle
        border-right: 1px solid rgb(234, 234, 234)
        border-left: 1px solid rgb(234, 234, 234)
      .featured__box--icon
        font-size: 50px
      .featured__box--title
        font-size: 18px
        font-weight: 600
        margin-top: 37px
        margin-bottom: 20px
      .featured__box--content
        text-align: center
        color: rgb(104, 104, 104)
        font-size: 15px
  .cover3
    margin-left: 160px
    margin-right: 160px
    .cover3__title
      text-align: center
      font-size: 44px
      font-weight: 500
      margin-top: 140px
      margin-bottom: 52px
    .cover3__image
      img
        width: 100%
    .cover3__content
      width: 100%
      margin-top: 75px
      margin-bottom: 130px
      .content__title
        width: 50%
        padding-right: 75px
        .content__title--title
          font-size: 26px
          font-weight: 600
        .content__title--subtitle
          color: rgb(104, 104, 104)
          font-size: 15px
          font-weight: 400
      .content__button
        height: 50px
        color: white
        background-color: black
        font-size: 16px
        font-weight: 600
        border-radius: 3px
        padding-right: 28px
        padding-left: 28px
  .shop
    .shop__title
      text-align: center
      font-size: 44px
      font-weight: 500
    .shop__mall
      padding-top: 70px
      width: 1230px
      .shop__commodity
        width: 278px
        height: 371px
        .shop__commodity--commodity
          width: 278px
          height: 278px
          padding-right: 15px
          padding-left: 15px
          img
            width: 100%
        .shop__commodity--content
          padding-right: 15px
          padding-left: 15px
          padding-top: 20px
          font-size: 15px
          font-weight: 600
          .shop__commodity--name
          .shop__commodity--buy.fas.fa-shopping-cart
        .shop__commodity--price
          padding-right: 15px
          padding-left: 15px
          font-size: 16px
          font-weight: 700
  .describe
    padding-top: 100px
    padding-bottom: 150px
    .describe__title
      font-size: 35px
      font-weight: 600
    .describe__subtitle
      padding-top: 10px
      padding-bottom: 10px
      color: rgb(125, 125, 125)
      font-size: 15px
      font-weight: 400
    .describe__input
      padding-top: 20px
      .describe__input--input
        border-width: 1px
        padding-top: 0px
        padding-bottom: 0px
        font-size: 13px
        font-weight: 400
        width: 471px
        height: 50px
        color: rgb(125, 125, 125)
        border-color: rgb(235, 235, 235)
        padding-right: 20px
        padding-left: 20px
        border-radius: 5px
        background-color: rgb(248, 248, 248)
        &:focus
          outline: none
      .describe__input--button
        margin-left: 15px
        font-size: 16px
        color: white
        height: 52px
        background-color : black
        border-radius: 5px
        padding-right: 20px
        padding-left: 20px
@media (max-width: 700px)
  .body
    .navbar
      .navbar__logo
      .navbar__nav
        .navbar__nav--title
      .navbar__function
        .navbar__function--icon
    .navbar__border
    .cover
      margin-left: 0px
      margin-right: 0px
      .cover__banner
        .banner__description
          padding-top: 100px
          padding-right: 20px
          padding-left: 20px
          .banner__description--tag
          .banner__description--title
          .banner__description--subtitle
            margin-bottom: 50px
          .banner__description--explore
            margin-bottom: 80px
        .banner__picture
    .cover__tips
      font-size: 18px
      font-weight: 600
      padding-right: 56px
      padding-left: 56px
      .cover__tips--discount
    .content
      .content__product
        .content__Light
          width: 300px
          height: 388px
          .content__Light--tag
          .content__Light--title
          .content__Light--show
        .content__Kitchen
          width: 300px
          height: 388px
          .content__Kitchen--title
          .content__Kitchen--show
        .content__LivingRoom
          width: 300px
          height: 388px
          .content__LivingRoom--tag
          .content__LivingRoom--title
          .content__LivingRoom--show
      .content__brand
        margin-left: 0px
        margin-right: 0px
        padding-top: 110px
        padding-bottom: 110px
        .content__brand--logobar
          width: 0px
          height: 0px
    .cover2
      padding-left: 40px
      padding-right: 40px
      padding-top: 50px
      .cover2__img
        width: 230px
        height: 471px
        margin-bottom: 50px
        img
          max-width: 100%
          max-height: 100%
      .cover2__word
        padding-right: 20px
        padding-left: 20px
        padding-bottom: 100px
        .cover2__word--subtitle
        .cover2__word--title
        .cover2__word--button
    .featured
      padding-right: 70px
      padding-left: 70px
      padding-top: 90px
      padding-bottom: 37px
      .featured__box
        width: 110%
        padding-bottom: 37px
        &.middle
          border-right: 0px
          border-left: 0px
        .featured__box--icon
        .featured__box--title
        .featured__box--content
    .cover3
      margin-left: 70px
      margin-right: 70px
      .cover3__title
        margin-top: 0px
      .cover3__image
        img
      .cover3__content
        .content__title
          width: 100%
          padding-right: 0px
          .content__title--title
          .content__title--subtitle
            padding-top: 10px
            padding-bottom: 10px
        .content__button
    .shop
      .shop__title
        font-size: 44px
        font-weight: 500
      .shop__mall
        width: 100%
        .shop__commodity
          width: 278px
          height: 371px
          .shop__commodity--commodity
            width: 278px
            height: 278px
            padding-right: 15px
            padding-left: 15px
            img
              width: 100%
          .shop__commodity--content
            padding-right: 15px
            padding-left: 15px
            padding-top: 20px
            font-size: 15px
            font-weight: 600
            .shop__commodity--name
            .shop__commodity--buy.fas.fa-shopping-cart
          .shop__commodity--price
            padding-right: 15px
            padding-left: 15px
            font-size: 16px
            font-weight: 700
    .describe
      text-align: center
      padding-top: 85px
      padding-right: 15px
      padding-left: 15px
      padding-bottom: 50px
      .describe__title
        width: 290px
      .describe__subtitle
        width: 290px
      .describe__input
        height: 160px
        .describe__input--input
          width: 260px
        .describe__input--button
          margin-top: 20px
          width: 120px
          margin-left: 0px
</style>
