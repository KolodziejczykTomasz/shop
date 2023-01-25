<template>
<div class="basket__product">
    <div class="basket__product-photo">
        <img src="" alt="Zdjęcie produktu" />
    </div>
    <div class="basket__product-name">
        <p>Świeca z wosku pszczelego w kształcie choinki</p>
    </div>
    <div class="basket__product-quantity">
        <div class="basket__product-amount">
            <p>35zł</p>
            <button>+</button>
            <p>1</p>
            <button>-</button>
            <button class="basket__product__button-delete">x</button>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.basket__product {
    display: flex;
    height: 82px;
    margin: 10px 0;

    & .basket__product-photo {
        @include flex-center;
        width: 20%;
        border: 1px solid $primary-color-green;

        & img {
            width: 70px;
            height: 70px;
            object-fit: contain;
            border: 1px solid red;
        }
    }

}

.basket__product-name {
    @include flex-center;
    width: 60%;
    font-size: $font-size-m;
}

.basket__product-quantity {
    @include flex-center;
    flex-direction: column;
    width: 20%;


    & div:first-child {
        width: 100%;
        text-align: right;
        padding-right: 30px;
    }
}

.basket__product-amount {
    display: flex;
    font-size: $font-size-m;
    justify-content: flex-end;

    & p:first-child {
        margin-right: 30px;
        font-size: $font-size-m;
    }

    & button {
        height: 20px;
        width: 20px;
        margin: 0 5px;
    }

    & button.basket__product__button-delete {
        color: red;
        width: 80px;
    }

}
</style>