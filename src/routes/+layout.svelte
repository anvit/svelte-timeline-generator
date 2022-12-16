<script>
    import '../styles/global.scss';
</script>

<div class="container">
    <header class="container__heading">
        <a href="/" class="link">Home</a>
    </header>
    <main class="container__main">
        <slot></slot>
    </main>
    <footer class="container__footer">
        <a href="/add-event" class="link">Submit an event!</a>
    </footer>
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
    .link {
        color: salmon;
    }
</style>
