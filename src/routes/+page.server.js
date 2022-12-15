import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const entries = [
        {
            id: 'cat',
            categories: ['cat'],
            color: 'green',
            faicon: 'cat',
            datetime: '2021-01-01 05:00',
            title: 'Cats are very good',
            image: {
                link: 'http://placekitten.com',
                src: 'http://placekitten.com/200/300',
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
        },
        {
            id: 'dog',
            categories: ['dog'],
            color: 'green',
            faicon: 'dog',
            datetime: '2021-05-01 23:55',
            title: 'Puppies are great too',
            body: 'Doggo ipsum sub woofer smol wow very biscit aqua doggo pupper dat tungg tho big ol pupper, very jealous pupper mlem heckin angery woofer very jealous pupper. Blep waggy wags long doggo, corgo. Tungg wow such tempt mlem very jealous pupper boofers lotsa pats, snoot smol big ol ruff doge super chub, long doggo heckin good boys and girls h*ck heck. Shoober blop many pats borkf, such treat. Big ol what a nice floof long water shoob wrinkler heck sub woofer, pupper porgo wow very biscit.',
            links: [
                {
                    href: 'https://en.wikipedia.org/wiki/Dog',
                    linkText: 'Dog',
                },
            ],
        },
    ]
    
    if (entries) {
        return {entries: entries};
    }
    
    throw error(404, 'Not found');
}
