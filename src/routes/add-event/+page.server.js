import clientPromise from '$lib/mongodb-client';
const COLLECTION_NAME = import.meta.env.VITE_COLLECTION;

/** @type {import('./$types').Actions} */
export const actions = {
    add: async ({request}) => {
        const dbConnection = await clientPromise;
        const db = dbConnection.db();
        const collection = db.collection(COLLECTION_NAME);
        const data = await request.formData();
        const formData = {
            title: data.get('title'),
            datetime: data.get('date'),
            body: data.get('body'),
            faicon: data.get('timeline-icon')
        }
        const newEvent = await collection.insertOne(formData);
        const addedEvent = {...formData, _id: newEvent.insertedId.toString()};
        return {
            status: 200,
            success: true,
            body: {
                addedEvent
            }
        }
    }
}
