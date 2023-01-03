// @ts-ignore
import clientPromise from '$lib/mongodb-client';

/** @type {import('./$types').Actions} */
export const actions = {
    add: async ({request}) => {
        // @ts-ignore
        const dbConnection = await clientPromise;
        const db = dbConnection.db();
        const collection = db.collection('timeline');
        const data = await request.formData();
        const newEvent = await collection.insertOne({
            title: data.get('title'),
            datetime: data.get('date'),
            body: data.get('body'),
            faicon: data.get('timeline-icon')
        });
        const newEventJson = JSON.stringify(newEvent);
        return {
            status: 200,
            success: true,
            body: {
                newEventJson
            }
        }
    }
}
