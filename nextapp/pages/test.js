// import Link from 'next/link'
// import db from '../utils/db';

// export const getStaticProps = async () => {
//   const entries = await db.collection('entries').orderBy('created', 'desc').get();
//   const entriesData = entries.docs.map(entry => ({
//     id: entry.id,
//     ...entry.data()
//   }));

//   return {
//     props: { entriesData },
//     revalidate: 10
//   }
// }

// export default function Posts ({entriesData}) {
//   console.log("ENTRIES DATA: ")
//   console.log(entriesData)

//   return (
//     <div>
//       <h1>Posts</h1>
//       {entriesData.map(entry => (
//         <div key={entry.id}>
//           <Link href={`/posts/${entry.slug}`}>
//             <a>{entry.title}</a>
//           </Link>
//           <br />
//         </div>
//       ))}
//     </div>
//   );
// };