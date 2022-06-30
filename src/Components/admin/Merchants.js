import React, { useEffect, useState } from "react";
import { collection, doc, getDocs } from "firebase/firestore"; 
import { db } from "../../Firebase/config";

const Merchants = () => {

  const [docdata, setdocData] = useState([]);



  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, 'Merchants'));
    let arr = [];
    querySnapshot.forEach((doc) => {

      arr.push(`${doc.data()['name']}`)
     
});
setdocData(arr)
  };

  useEffect(() => {
     getData();
  }, []);
  return (
    <div>  <div className="tab-pane" id="tabs-6" role="tabpanel">
    <div className="container">
    <div className="row">
        <div className="col-md-12">
        <table className="table main-tabel">
          
            <thead className="data-tabel">
         
          <tr className="same-tabel">
          <th>Pending</th>
          <th>Approved</th>
          <th>Rejected</th>
      </tr>
        </thead>
        {docdata && 
          <tbody>
          
             {docdata && docdata.map((itm)=>{
              console.log(itm,"name");
              return(
                <tr>
                  <td>{itm}</td>
                  <td>demo data</td>
                  <td>demo data</td>
               </tr>
                
              )
            }) 
          }
            
        
          </tbody>}
        </table>
        </div>
    </div>
    </div>
</div>
      
    </div>
  )
}

export default Merchants