<template>
    <div id="promotion-bar">
        <p>Darmowe dostawy przy zakupach powyżej 300zł</p>
    </div>
</template>
<style lang="scss" scoped>
#promotion-bar {
    @include flex-center;
    height: 70px;
    width: 100%;
    color: $yellow;
    font-family: "BloggerSansBold";
    font-size: $font-size-xl;
    background-color: $primary-color-green;
    text-align: center;
}
</style>