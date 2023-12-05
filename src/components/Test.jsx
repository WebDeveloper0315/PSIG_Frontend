import React, { useState, useEffect } from 'react';

const TransitionExample = () => {
  const [firstDivVisible, setFirstDivVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFirstDivVisible(false);
    }, 3000); // Change the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {firstDivVisible && <div className="first-div">Hello I am here</div>}
      {!firstDivVisible && <div className="second-div">Hello, I am new.</div>}
    </div>
  );
};

export default TransitionExample;
