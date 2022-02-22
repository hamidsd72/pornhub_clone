<template>
    <div class="comingsoon hero-image" :style="cssProps">
        <h1 class="d-none d-lg-block font-weight-bold text-orange display-4">Coming Soon...</h1>
        <h1 class="d-lg-none font-weight-bold text-orange" style="margin-top: 150px">Coming Soon...</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cssProps: { backgroundImage: `url(${require('@/assets/images/vr-music.jpg')}) ` },
        }
    },
}
</script>