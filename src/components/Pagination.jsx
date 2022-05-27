// import React from 'react'
// //import { Button } from "antd";

// const UserPagination = (props) => {
//     const {
//         userPerPage,
//         totalUser,
//         currentPage,
//         pag,
//         prevPage,
//         nextPage
//     } = props;
//     const pagNumbers = [];
//     for (let i = 1; i <= Math.ceil(totalUser / userPerPage); i++) {
//         pagNumbers.push(i)
//     }

//     return (
//         <nav>
//             <div className='pagination justify-content-center'>
//                 {currentPage !== 1 && (
//                     <li>
//                         <button style={{ cursor: "pointer" }} type="primary"
//                             onClick={() => prevPage()}>
//                             Previous
//                         </button>
//                     </li>
//                 )}
//                 { pagNumbers.map((num) => (
//                     <li className='page-item' key={num}>
//                         <a onClick={() => pag(num)} className="page-link"
//                             style={{ cursor: "pointer" }}>
//                             {num}
//                         </a>
//                     </li>
                    
//                 ))}
//                 {/* { pagNumbers.l ! == currentPage && (
//                     <li>
//                         <Button style={{cursor:"pointer"}}  type="primary" 
//                         onClick ={() => nextPage()}>
//                             Next
//                         </Button>

//                     </li>
//                 )} */}

                
                
//             </div>
//         </nav>
//     )
// }


// export default  UserPagination;
   