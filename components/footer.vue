<template>
<div id="footer">
    <div>
        <div id="news-bar">
            <p>Darmowe dostawy przy zakupach powyżej 300zł</p>
        </div>
        <div id="footer__menu-container">
            <div class="footer__menu-item">
                <p class="footer__menu-title">INFORMACJE:</p>
                <ul class="circle-list-style-green">
                    <li>Kontakt z nami</li>
                    <li>Warunki wysyłki</li>
                    <li>Regulamin sklepu</li>
                    <li>Polityka Prywatności</li>
                </ul>
            </div>
            <div class="footer__menu-item">
                <p class="footer__menu-title">MOJE KONTO:</p>
                <ul class="circle-list-style-green">
                    <li>Moje dane</li>
                    <li>Newsletter</li>
                    <li>Pomoc</li>
                </ul>
                <p class="footer__menu-title">Dołącz do nas</p>
                Facebook
                Instagran
            </div>
            <div class="footer__menu-item">
                <p class="footer__menu-title">KONTAKT Z NAMI:</p>
                <ul>
                    <li>Prosto z natury</li>
                    <li>ul. Lipowa 1/1</li>
                    <li>11-100 Lidzbark Warminski</li>
                    <li>NIP: 5213668111</li>
                </ul>
                <ul class="green-text">
                    <li>tel: +48 89 378 22 41</li>
                    <li>tel. +47 607 909 909</li>
                    <li>poczta@prostoznatury.pl</li>
                </ul>
                <p class="footer__menu-title">Bank</p>
                <ul>
                    <li>ING Bank Śląski:</li>
                    <li>95 1050 0000 1000 0091 0000 1111</li>
                </ul>
            </div>
            <div class="footer__menu-item">
                <div class="footer__menu__newsletter">
                    <p class="footer__menu__newsletter-title">NEWSLETTER:</p>
                    <p class="footer__menu__newsletter-content">Zapisz się do newslettera,</p>
                    <p class="footer__menu__newsletter-content">otrzymuj informacje o nowościach i promocjach.</p>
                    <div>
                        <div class="footer__menu__newsletter-cta">10% raboatu za zapisanie się do newslettera</div>
                        <div class="footer__menu__newsletter-button"><button>Zapisz się</button></div>
                    </div>
                </div>
                <p class="footer__menu__newsletter-title">Formy płatności</p>
                <div class="footer__menu__metthod-pay">Przelew | Karta | BLIK</div>
            </div>
        </div>
        <div id="footer__company">
            <div id="footer__company-name">Prosto z natury Sp. z o.o. </div>
            <div id="footer__company-politics">Polityka prywatności | Regulamin | Zwroty | Dostawa</div>
        </div>
    </div>
    <div id="copyright">
        <p>Copyright@2023</p>
    </div>
</div>
</template>
<style lang="scss">
#news-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 100%;
    color: #efca36;
    font-size: 2rem;
    background: rgba(85, 166, 2, 1);
    background-color: #55a602;
}

#footer {
    min-height: 300px;
    height: auto;
    width: 100%;
    
}

#footer ul {
    list-style: none;
    margin-bottom: 20px;
    font-size: 1.6rem;
}

.green-text {
    color: #55a602;
    font-weight: 600;
}

#footer .circle-list-style-green {
    list-style-type: circle;
    margin-left: 10px;

}

#footer ul.circle-list-style-green li::marker {
    color: #55a602;
}


#footer__menu-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 15px;
    margin-top: 30px;
}

.footer__menu-item {
    width: 100%;
    min-width: 200px;
    height: 100%;
    min-height: 290px;

}

@media only screen and (min-width: 768px) {
    .footer__menu-item {
        width: 20%;
    }

    .footer__menu-item:last-child {
        width: 40%;
    }
}

.footer__menu-title {
    font-size: 1.7rem;
    margin-bottom: 15px;
    font-weight: 600;
}

#footer__company {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 40px;

}

@media only screen and (min-width: 768px) {
    #footer__company {
        flex-direction: row;
    }
}

#footer__company-name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    font-size: 1.6rem;
    height: 100%;
    color: #55a602;
    font-weight: 600;
}

.footer__menu__newsletter {
    width: 100%;
    height: 160px;
    background-color: #55a602;
    color: white;
    margin-top: 30px;
    margin-bottom: 15px;
    padding: 15px;
}

.footer__menu__newsletter-title {
    font-size: 1.7rem;
    margin-bottom: 10px;
    font-weight: 600;
}

.footer__menu__newsletter-content,
.footer__menu__method-pay {
    font-size: 1.4rem;
}

.footer__menu__newsletter div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-size: 1.4rem;

}

.footer__menu__newsletter-cta {
    justify-content: flex-start;
    align-content: flex-start;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid #818181;
}


.footer__menu__newsletter div:last-child {
    width: 100%;
}


.footer__menu__newsletter button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #efca36;
    border-radius: 30px;
    color: #efca36;
    display: block;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 105px;
    background-color: #55a602;
}

.footer__menu-content {
    font-size: 1.4rem;
}

#footer__company-politics {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 1.4rem;
}

#copyright {
    height: 30px;
    color: whitesmoke;
    background-color: #55a602;
    font-size: 1.2rem;
}

#copyright p {
    text-align: center;
}

@media only screen and (min-width: 768px) {
    #copyright {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>