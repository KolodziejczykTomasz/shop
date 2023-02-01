<template>
<div class="footer__menu__newsletter">
    <p class="footer__menu__newsletter-title">NEWSLETTER:</p>
    <p class="footer__menu__newsletter-content"> Zapisz się do newslettera</p>
    <p class="footer__menu__newsletter-content">
        otrzymuj informacje o nowościach i promocjach.
    </p>
    <div>
        <div class="footer__menu__newsletter-cta">
            10% raboatu za zapisanie się do newslettera
        </div>
        <div class="footer__menu__newsletter-button">
            <button><NuxtLink to="/newsletter">Zapisz się</NuxtLink></button>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.footer__menu__newsletter {
    width: 100%;
    height: 160px;
    background-color: $primary-color-green;
    color: $white;
    margin-top: 30px;
    margin-bottom: 15px;
    padding: 15px;
}

.footer__menu__newsletter-title {
    font-size: $font-size-m;
    margin-bottom: 10px;
    font-weight: $bold;
}

.footer__menu__newsletter-content{
    font-size: $font-size-s;
}
.footer__menu__newsletter div {
    @include flex-center;
    margin-top: 10px;
    font-size: $font-size-s;
}

.footer__menu__newsletter-cta {
    justify-content: flex-start;
    align-content: flex-start;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid $gray;
}

.footer__menu__newsletter div:last-child {
    width: 100%;
}

.footer__menu__newsletter button {
    @include flex-center;
    border: 2px solid $yellow;
    border-radius: 30px;
    color: $yellow;
    display: block;
    font-size: $font-size-s;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 105px;
    background-color: $primary-color-green;
    transition: .2s; 
        & a {
            color: $yellow;
            &:hover {       
            color: $white;
            }
    }
}
</style>