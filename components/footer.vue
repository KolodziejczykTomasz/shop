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
        <div class="media-social">
            <div><img class="icon-social-media" src="../assets/icons/phone.png" alt="Telefon" /></div>
            <div><img class="icon-social-media" src="../assets/icons/facebook.png" alt="Facebook" /></div>
            <div><img class="icon-social-media" src="../assets/icons/instagram.png" alt="Instagram" /></div>
        </div>
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
            <p class="footer__menu__newsletter-content">
              otrzymuj informacje o nowościach i promocjach.
            </p>
            <div>
              <div class="footer__menu__newsletter-cta">
                10% raboatu za zapisanie się do newslettera
              </div>
              <div class="footer__menu__newsletter-button">
                <button>Zapisz się</button>
              </div>
            </div>
          </div>
          <p class="footer__menu__newsletter-title">Formy płatności</p>
          <div class="footer__menu__method-pay"><div class="pay-form">
            <div><img class="icon-pay-form" src="../assets/icons/visa.png" alt="visa" /><img class="icon-pay-form" src="../assets/icons/google-pay.png" alt="visa" /></div>
            
        </div></div>
        </div>
      </div>
      <div id="footer__company">
        <div id="footer__company-name">Prosto z natury Sp. z o.o.</div>
        <div id="footer__company-politics">
          Polityka prywatności | Regulamin | Zwroty | Dostawa
        </div>
      </div>
    </div>
    <div id="copyright">
      <p>Copyright@2023</p>
    </div>
  </div>
</template>

<style lang="scss">
.pay-form {
    display: flex;
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
}
#news-bar {
  @include flex-center;
  height: 70px;
  width: 100%;
  color: $yellow;
  font-family: "BloggerSansBold";
  font-size: $font-size-xl;
  background-color: $primary-color-green;
}

#footer {
  min-height: 300px;
  height: auto;
  width: 100%;
  & ul {
    list-style: none;
    margin-bottom: 20px;
    font-size: $font-size-m;
  }
}

.green-text {
  color: $primary-color-green;
  font-weight: $bold;
}

#footer .circle-list-style-green {
  list-style-type: circle;
  margin-left: 10px;
}

#footer ul.circle-list-style-green li::marker {
  color: $primary-color-green;
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
  font-size: $font-size-m;
  margin-bottom: 15px;
  font-family: "BloggerSansBold";
}

#footer__company {
  @include flex-center;
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
  @include flex-center;
  width: 50%;
  height: 100%;
  font-size: $font-size-m;
  color: $primary-color-green;
  font-family: "BloggerSansBold";
}

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

.footer__menu__newsletter-content,
.footer__menu__method-pay {
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
}

.footer__menu-content {
  font-size: $font-size-s;
}

#footer__company-politics {
  @include flex-center;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: $font-size-s;
}

#copyright {
  height: 30px;
  color: $white;
  background-color: $primary-color-green;
  font-size: $font-size-sx;
  & p {
    text-align: center;
  }
}

@media only screen and (min-width: 768px) {
  #copyright {
    @include flex-center;
  }
}
</style>
