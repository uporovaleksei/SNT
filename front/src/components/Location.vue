<template>
  <div>
        <div class="location">
            <div class="location__container">
                <div class="location__title">
                    Где мы находимся
                </div>
                <div style="width: 100%">
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3,%20%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB.,%20620036+(%D0%A0%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&amp;language=ru "><a href="https://www.gps.ie/wearable-gps/">Гугл карты</a></iframe>
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
.location {
    margin-top: 80px;
}
.location__container {
    width: 80%;
    margin: 0 auto;
}
.location__title {
    font-size: 2rem;
    color: #476160;
    font-weight: 600;
    margin: 40px 0;
}
</style>