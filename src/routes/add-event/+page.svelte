<svelte:head>
    <title>Submit an event | Timeline</title>
</svelte:head>

<div class="form-container">
    <form action="/add-event" method="post" class="add-form">
        <label class="add-form__label">
            Title <input class="add-form__input add-form__input--title" type="text" name="title" id="message-title" placeholder="The peanut butter kerfuffle"/>
        </label>
        <label class="add-form__label">
            When did this happen? <input class="add-form__input add-form__input--date" type="date" name="date" id="message-date">
        </label>
        <p class="add-form__label">
            Timeline Icon
            <label>
                <i class="fa-solid fa-burst"></i>
                <input type="radio" name="timline-icon" id="timeline-icon-burst" value="fa-solid fa-burst" />
            </label>
            <label>
                <i class="fa-solid fa-handshake-simple"></i>
                <input type="radio" name="timline-icon" id="timeline-icon-party" value="fa-solid fa-handshake-simple" />
            </label>
            <label>
                <i class="fa-solid fa-champagne-glasses"></i>
                <input type="radio" name="timline-icon" id="timeline-icon-party" value="fa-solid fa-champagne-glasses" />
            </label>
            <label>
                <i class="fa-solid fa-cake-candles"></i>
                <input type="radio" name="timline-icon" id="timeline-icon-candles" value="fa-solid fa-cake-candles" />
            </label>
            <label>
                <i class="fa-solid fa-face-surprise"></i>
                <input type="radio" name="timline-icon" id="timeline-icon-surprise" value="fa-solid fa-face-surprise" />
            </label>
        </p>
        <label for="body" class="add-form__label">
            Details 
        </label>
        <textarea class="add-form__textarea" name="body" id="message-body" rows="4" placeholder="On this day…"></textarea>
        <button class="add-form__button">Submit</button>
    </form>
</div>

<style lang="scss">
@use '../../styles/partials/colours' as *;
@use '../../styles/partials/variables' as *;
.form-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.add-form {
    display: flex;
    flex-direction: column;
    &__label {
        margin: 0.25rem 0;
    }
    &__input {
        padding: 0.5rem;
        margin-left: 1rem;
        border: 0;
        border-radius: $input-border-radius;
        &--title {
            width: 15rem;
        }
    }
    &__textarea {
        width: 20rem;
        margin: 0.5rem 0;
        padding: 0.5rem;
        border: 0;
        border-radius: $input-border-radius;
    }
    &__button {
        padding: 0.5rem;
        border: 0;
        border-radius: $input-border-radius;
        background-color: $primary;
        color: $text-colour;
        cursor: pointer;
        transition: background-color 0.5s;
        &:hover {
            background-color: lighten($primary, 10%);
        }
        &:active{
            background-color: darken($primary, 10%);
        }
    }
}
</style>
<!-- {
    id: 'cat',
    categories: ['cat'],
    color: 'green',
    faicon: 'cat',
    datetime: '2021-01-01 05:00',
    title: 'Cats are very good',
    image: {
        link: 'http://placekitten.com',
        src: 'http://placekitten.com/400/400',
        alt: 'A placeholder kitten',
        caption: 'Kitten!',
    },
    body: "The best thing in the universe is a cardboard box. Chirp at birds catasstrophe for meowwww for hiding behind the couch until lured out by a feathery toy for morning beauty routine of licking self sugar, my siamese, stalks me (in a good way), day and night lick the other cats. Pushed the mug off the table shove bum in owner's face like camera lens or tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad and grass smells good, licks your face, but hiiiiiiiiii feed me now.",
    links: [
        {
            href: 'https://en.wikipedia.org/wiki/Cat',
            linkText: 'Cat',
        },
    ],
}, -->