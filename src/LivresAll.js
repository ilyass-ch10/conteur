import React from 'react';

const LivresAll = ({ T }) => {
  return (
    <div>
      {T.map((livre, index) => (
        <div key={livre.id}>
          - Livre {index + 1} : id:{livre.id}, Titre:{livre.titre}, Prix:{livre.prix}
        </div>
      ))}
    </div>
  );
};

export default LivresAll;