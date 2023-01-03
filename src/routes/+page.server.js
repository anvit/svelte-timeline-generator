import { error } from '@sveltejs/kit';
import clientPromise from '$lib/mongodb-client';
const COLLECTION_NAME = import.meta.env.VITE_COLLECTION;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const dbConnection = await clientPromise;
    const db = dbConnection.db();
    const collection = db.collection(COLLECTION_NAME);
    const findResult = await collection.find({}).toArray();
    if (findResult) {
        const sortedEntries = findResult.map(entry => {
            return {
                title: entry.title,
                faicon: entry.faicon,
                body: entry.body,
                image: entry.image && {
                    src: entry.image.src,
                    alt: entry.title
                },
                datetime: new Date(entry.datetime),
                _id: entry._id.toString()
            }
        }).sort( (a, b) => {
            return b.datetime.getTime() - a.datetime.getTime();
        });
        return {entries: sortedEntries};
    }
    
    throw error(404, 'Not found');
}
