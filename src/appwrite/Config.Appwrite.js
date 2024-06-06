import { Account, Client ,Databases } from 'appwrite';
// const ProjectId=import.meta.VITE_PROJECT_ID

const client = new Client()
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account=new Account(client)
export const db = new Databases(client);

export const databaseID = import.meta.env.VITE_APPWRITE_DB_ID
export const collectionID =import.meta.env.VITE_APPWRITE_COLLECTION_Chat_IDs