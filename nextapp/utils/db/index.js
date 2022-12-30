import admin from 'firebase-admin';
// import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(process.env.SERVICE_ACCOUNT_KEY))
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}

const db = admin.firestore()

export default db;