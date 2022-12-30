import db from '../../utils/db';

export default async function handler(req, res) {
    if(req.method != "GET") {
      res.status(405).send({ message: 'Only GET requests allowed' });
      return;
    }  

    var users_list = await db.collection("users").get()

    users_list = users_list.docs.map(doc => doc.data())

    res.status(200).json({users:users_list});
}