<template>
    <div class="db-loader">
        <img src="/images/kuriboh.webp" alt="loading" class="db-pulse">
    </div>
</template>

<script>
    export default {
        name: 'LoaderComponent',
    }
</script>

<style lang="scss" scoped>
.db-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 4rem;
}

@keyframes pulse {
                0% {
                    transform: scale(0.8);
                }
                50% {
                    transform: scale(1.5);
                }
                100% {
                    transform: scale(0.8);
                }
            }

.db-pulse {
        animation: pulse 1s infinite;
    }
</style>