import db from '../../utils/db';

export default async function handler(req, res) {
    if(req.method != "POST") {
      res.status(405).send({ message: 'Only POST requests allowed' });
      return;
    }  
    const body = req.body;

    db.collection("users").add({
        name: body.name,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    res.status(200).json({ message: "Success" });
}
