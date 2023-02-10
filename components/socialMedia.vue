<template>
<div class="media-social">
    <div><img class="icon-social-media" src="../assets/icons/phone.png" alt="Telefon" /></div>
    <div><img class="icon-social-media" src="../assets/icons/facebook.png" alt="Facebook" /></div>
    <div><img class="icon-social-media" src="../assets/icons/instagram.png" alt="Instagram" /></div>
</div>
</template>
<style lang="scss" scoped>
.media-social {
    display: flex;
}

.media-social div:first-child img {
    transform: rotate(48deg);
    margin-left: 0;
}

.icon-social-media {
    height: 35px;
    width: 35px;
    margin: 0 10px;
    background-color: $yellow;
    border-radius: 19px;
    transition: .2s;
    &:hover{
        background-color: $primary-color-green;
    }
}
</style>
