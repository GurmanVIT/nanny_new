// YourApp.js
import React, { useState } from 'react';
import CustomModal from './CustomModal';

const YourApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className='m-3'>Open Modal</button>
      <CustomModal
        isOpen={isModalOpen}
        closeModal={closeModal}

      />
    </div>
  );
};

export default YourApp;
