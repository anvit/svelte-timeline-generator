<svelte:head>
    <title>Submit an event | Timeline</title>
</svelte:head>

<script>
  /** @type {import('./$types').ActionData} */
  export let form;    
</script>
<div class="form-container">
    <form action="?/add" method="post" class="add-form">
        <label class="add-form__label">
            <p>Title<span class="required-icon">*</span></p> <input class="add-form__input add-form__input--title" type="text" name="title" id="message-title" placeholder="The peanut butter kerfuffle" required />
        </label>
        <label class="add-form__label">
            When did this happen? <input class="add-form__input add-form__input--date" type="date" name="date" id="message-date">
        </label>
        <label class="add-form__label">
            <p>What kind of event?<span class="required-icon">*</span></p>
            <select class="add-form__select" name="timeline-icon" required>
                <option value="fa-solid fa-burst">💥</option>
                <option value="fa-solid fa-handshake-simple">🤝🏼</option>
                <option value="fa-solid fa-champagne-glasses">🥂</option>
                <option value="fa-solid fa-cake-candles">🎂</option>
                <option value="fa-solid fa-surprise">😮</option>
            </select>
        </label>
        <label for="body" class="add-form__label">
            Details 
        </label>
        <textarea class="add-form__textarea" name="body" id="message-body" rows="4" placeholder="On this day…"></textarea>
        <button class="add-form__button">Submit</button>
    </form>
    {#if form?.success}
    <p class="form-message form-message--success">Successfully added a new event!</p>
    {/if}

</div>

<style lang="scss">
@use '../../styles/partials/colours' as *;
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/animations' as *;
.required-icon {
    color: lighten($error-colour, 10%);
    margin-left: 2px;
    font-size: 1rem;
}
.form-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.form-message {
    margin: 2rem;
    padding: 1rem 2.5rem;
    font-size: 0.8rem;
    animation: fade 2s ease-in 1s;
    animation-fill-mode: forwards;
    &--success {
        text-shadow: 1px 1px $success-shadow-colour;
        background-color: $success-colour;
    }
}
.add-form {
    display: flex;
    flex-direction: column;
    &__label {
        margin: 0.5rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    &__select {
        padding: 0.5rem;
        border-radius: 5px;
    }
    &__textarea {
        width: 20rem;
        height: 6rem;
        margin: 0.5rem 0;
        padding: 0.5rem;
        border: 0;
        border-radius: $input-border-radius;
        font-size: 0.8rem;
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