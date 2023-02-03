import React, { useRef } from "react";
const Categorie = () => {
  const duree = useRef(null);

  // function setInfo_Appro(data) {
  //   sessionStorage.setItem("Appro", JSON.stringify(data));
  //   window.location.href = "/homeApprovisionnement";
  // }

  // const HandleUpdate = (event) => {
  //   event.preventDefault();

  //   var content = {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   fetch("http://localhost:8080/encheres/2?duration="+duree.current.value, content)
     
  // };
//    fetch("http://localhost:8080/encheres/2?duration="+fin.current.value, content)
    return (
    //   <div>      
    //     <h1>Ajout Categorie</h1>
    //     <form action="submit" method="post">
    //   <table className="table">
    //       <thead>
    //           <tr>
    //               <th scope="col">Date de debut</th>
    //               <th scope="col">Duration</th>
    //               <th scope="col">Nom de l'enchere</th>
    //               <th scope="col">Prix initiale</th>
    //               <th scope="col">Categorie</th>
    //               <th scope="col">Action</th>
    //           </tr>
    //       </thead>
    //       <tbody>
    //       <tr>
    //             <td>20-01-2023 09:00:00</td>
    //             <td><input ref={duree} type="number"/></td>
    //             <td>Table</td>
    //             <td>2000</td>
    //             <td>Canape</td>
    //             <td><input style={{float: "center"}}
    //             type="submit" onClick={HandleUpdate}
    //             className="btn btn-primary"
    //             value="Creer"/></td>
    //         </tr>
    //         </tbody>
    //       </table>
    //       </form>
    // </div>

    <p>Yep</p>

    );
  }

//export default App;
export default Categorie;
