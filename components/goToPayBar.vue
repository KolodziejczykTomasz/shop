<template>
<section id="goToPayBar">
    <div class="goToPayBar-button">
        <button>
            <NuxtLink to="/shop">Kontynuuj zakupy</NuxtLink>
        </button>
    </div>
    <div class="goToPayBar-button">
        <button>
            <NuxtLink to="/">Przejdź do płatności</NuxtLink>
        </button>
    </div>
</section>
</template>

<style lang="scss">
#goToPayBar {
    @include flex-center;
    justify-content: space-evenly;
    background: $primary-color-green;
    flex-direction: column;
    height: 100px;
    width: 100%;
    font-family: "BloggerSansBold";
    margin: 30px 0 15px 0;
}


@media only screen and (max-width: 767px) {
    #goToPayBar {
        flex-direction: row;      
    }
}
@media only screen and (min-width: 768px) {
    #goToPayBar {
        flex-direction: row;
    }
}

.goToPayBar-button button{
    display: block;
    right: 30px;
    width: auto;
    padding: 15px 30px;
    border: none;
    text-transform: uppercase;
    font-size: $font-size-m;
    background-color: transparent;
    z-index: 1;
    letter-spacing: 1.2px; 
    transition: .2s;
        & a {
            color: $white;
    
            &:hover {
                color:$yellow ;
            }
        }
}
</style>