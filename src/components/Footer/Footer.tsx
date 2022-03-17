import React from 'react';

function Footer() {
  return (
    <div className="w-full flex flex-col footer">
      <div className="bg-secondary md:pb-20 md:pt-10 p-4">
        <div className="container flex flex-col text-center lg:text-normal md:flex-row mx-auto lg:w-5/6 justify-between">
          <div>
            <h6 className="text-gray-500 font-bold mb-3">Hello</h6>
          </div>
          <div>
            <h6 className="text-gray-500 font-bold mb-3">{'secondColumnLabel'}</h6>
          </div>
          <div>
            <h6 className="text-gray-500 font-bold mb-3">{'thirdColumnLabel'}</h6>
          </div>
          <div>
            <h6 className="text-gray-500 font-bold mb-3">{'fourthColumnLabel'}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
