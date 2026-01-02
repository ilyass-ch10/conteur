import React from 'react';

const LivresAll = ({ T }) => {
   const {x}=useParams();
  return (
    <div>
      {T.map((livre, index) => (
        <div key={livre.id}>
          - Livre : id:{livre.id}, Titre:{livre.titre}, Prix:{livre.prix}
           <h1>id est : {x}</h1>
        </div>
       
      ))}
    </div>
  );
};

export default LivresAll;