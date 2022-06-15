<template>
        <div class="subnav">
            <div class="subnav__container">
                <div class="subnav__geo">
                    <div class="geo__icon">
                        
                    </div>
                    <div class="geo__label">
                        г.Екатеринбург,Чусовской тракт,4 км.
                    </div>
                </div>
                <div class="subnav__phone">
                    <div class="phone__icon"></div>
                    <div class="phone__label">
                        8 (989) 989 98 89
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.subnav {
    position: fixed;
    width: 100%;
    height: 30px;
    margin-top: 60px;
    background: #d3e1e0;
    z-index: 3;
}
.subnav__container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
    font-weight: 600;
    color: #476160;
}
.subnav__geo {
}
.geo__icon {
}
.geo__label {
}
.subnav__phone {
}
.phone__icon {
}
.phone__label {
}
</style>