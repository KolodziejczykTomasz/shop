<template>
<section id="cta">
    <div class="cta-text">Wiosenna wyprzedaż towaru</div>
    <div class="cta-button"><button><NuxtLink to="/shopSpecials"> Zobacz</NuxtLink></button></div>
</section>
</template>

<style lang="scss">
#cta {
    @include flex-center;
    border: 1px solid $primary-color-green;
    background: $primary-color-green;
    @include background-gradient;
    flex-direction: column;
    height: 100px;
    width: 100%;
    font-family: "BloggerSansBold";
    margin: 30px 0 15px 0;
}

@media only screen and (min-width: 768px) {
    #cta {
        flex-direction: row;
    }
}

.cta-text {
    @include flex-center;
    height: 100px;
    width: 100%;
    font-size: $font-size-xl;
    text-transform: uppercase;
    color: $yellow;
}

.cta-button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100px;
    width: 100%;
}

.cta-button button {
    display: block;
    right: 30px;
    width: auto;
    padding: 15px 30px;
    border: none;
    text-transform: uppercase;
    font-size: $font-size-m;
    background: $primary-color-green;
    color: $yellow;
    z-index: 1;
    letter-spacing: 1.2px;
    border: 1px solid $primary-color-green;
    margin-right: 70px;
    transition: .2s;    
    & a {
        color: $yellow;    
        &:hover {
            color: $white;
        }
    }
}

@media only screen and (min-width: 768px) {
    .cta-text {
        width: 60%;
    }

    .cta-button {
        width: 40%;
    }
}
</style>