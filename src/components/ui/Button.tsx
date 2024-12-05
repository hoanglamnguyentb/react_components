import React from 'react';

type Input = {
  className: string;
  children?: React.ReactNode;
  isLoading: boolean;
};
const Button = ({
  className = '',
  children = null,
  isLoading = false,
}: Input) => {
  return (
    <button
      type="submit"
      className={`text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${className}`}
    >
      {isLoading ? (
        <span className="border-2 animate-spin border-white size-5 block border-t-transparent rounded-full m-auto"></span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
