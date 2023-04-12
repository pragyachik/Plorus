// import Link from "next/link";
// import { useEffect, useState } from "react";

// const Users = () => {
//   const [users_list, setUsersList] = useState("Loading...");
  
//   fetch("api/users").then((res) => res.json())
//   .then((data) => {
//     setUsersList(JSON.stringify(data.users));
//   })

//   return (
//     <>
//       <div className="AboutBackground">
//       <h1>Users</h1>
//       <div>{users_list}</div>
//       <Link href="/"><a className="backHome">Back to Home</a></Link>
//       </div>
//     </>
//   )
// };

// export default Users;