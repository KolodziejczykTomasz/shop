<template>
    <div>    
        <div id="top__menu">
            <div id="top__menu-brand"><img src="./brand.jpg" alt="Brand" /></div>
            <div id="top__menu__company">
                <div class="top__menu__company-info">
                    <div class="top__menu__company-title">Prosto z natury Sp. z o.o. </div>
                    <ul class="top__menu__company-address">
                        <li>ul. Lipowa 1/1</li>
                        <li>11-100 Lidzbark Warmiński</li>
                    </ul>
                </div>
                <div class="top__menu__company-social">
                    <div>Zadzwoń do nas!</div>
                    <div>Facebook</div>
                </div>
                <div class="top__menu__company-user">
                    <div>Zaloguj/Zarejestruj</div>
                    <div>Koszyk: Pusty</div>
                </div>
            </div>
        </div>
        <div id="bottom__menu">
            <ul id="bottom__menu-list">
                <li>Home</li>
                <li>O nas</li>
                <li>Sklep</li>
                <li>Wysyłka</li>
                <li>Kontakt</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss">
#top__menu {
    display: flex;
    flex-direction: column;
    min-height: 140px;
    height: auto;
    width: 100%;
}

@media only screen and (min-width: 768px) {
    #top__menu {
        flex-direction: row;
    }

    #top__menu-brand img {
        max-width: 100%;
    }

}

#top__menu-brand {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 250px;
    height: auto;
    width: 100%;
}

#top__menu__company {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
}

.top__menu__company-title {
    font-size: 2.2rem;
    font-weight: 600;
}

.top__menu__company-address {
    font-size: 1.6rem;
    margin-top: 10px;
}

.top__menu__company-info,
.top__menu__company-social,
.top__menu__company-user {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 50px;
    height: auto;
    background-color: #55a602;
    color: white;
    font-size: 1.7rem;
}

.top__menu__company-info:first-child {
    text-align: center;
    width: 100%;
}


@media only screen and (min-width: 768px) {

    .top__menu__company-social,
    .top__menu__company-user {
        display: flex;
        flex-direction: row;
    }
}

.top__menu__company-info ul {
    list-style: none;
    text-align: center;
    padding: 0;
}

#bottom__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70px;
    height: auto;
    width: 100%;
    margin-top: 5px;
}

#bottom__menu-list {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 0;
}

@media only screen and (min-width: 768px) {
    #bottom__menu-list {
        flex-direction: row;
        height: 70px;
    }

    .top__menu__company-social,
    .top__menu__company-user {
        height: 25%;
    }

    .top__menu__company-info:first-child {
        height: 50%;
    }
}

#bottom__menu-list li {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    border: 2px solid #efca36;
    color: #efca36;
    font-size: 1.8rem;
    text-transform: uppercase;
    background-color: #55a602;
    cursor: pointer;
    margin: 0 2px;
}


#bottom__menu-list li:first-child {
    margin-left: 0;
}

#bottom__menu-list li:last-child {
    margin-right: 0;
}
</style>