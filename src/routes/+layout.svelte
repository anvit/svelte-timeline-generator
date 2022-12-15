<script>
    import '../styles/global.scss';
</script>

<div class="container">
    <header class="container__heading">Heading</header>
    <main class="container__main">
        <slot></slot>
    </main>
    <footer class="container__footer">Copyright ©️ 2022</footer>
</div>

<style lang="scss">
    @use '../styles/partials/colours' as *;
    .container {
        height: 100%;
        &__heading {
            height: 5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $primary;
            margin-bottom: 2rem;
        }
        &__footer {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $primary;
            width: 100%;
            height: 3rem;
            position: fixed;
            bottom: 0;
        }
    }
</style>
