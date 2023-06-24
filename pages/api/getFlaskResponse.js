export default async function handler(req, res) {
  if(req.method != "GET") {
    res.status(405).send({ message: 'Only GET requests allowed' });
    return;
  }  
  const response = await fetch("http://172.105.52.83/returnjson", {
    method:"GET",
    mode: 'no-cors',
  });
  let responseText = response
  res.status(200).json(responseText);
}