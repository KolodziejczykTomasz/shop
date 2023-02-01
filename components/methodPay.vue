<template>
<div class="pay-form">
    <div>
        <img class="icon-pay-form" src="../assets/icons/visa.png" alt="visa" />
        <img class="icon-pay-form" src="../assets/icons/google-pay.png" alt="visa" />
    </div>
</div>
</template>
<style lang="scss" >
.pay-form {
    display: flex;
    padding-top: 10px;
}

.pay-form div:first-child img {
    margin-left: 0;
}

.icon-pay-form {
    height: 40px;
    width: 40px;
    margin: 0 10px;
    border-radius: 19px;
}
</style>