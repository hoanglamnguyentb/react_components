import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
type Input = {
  className?: string;
  placeHolder?: string;
  modelName?: string;
  type?: string;
  registerProps?: UseFormRegisterReturn;
  errorMessage?: string;
};
const FormControl = ({
  className = '',
  placeHolder = '',
  modelName = '',
  type = 'text',
  registerProps,
  errorMessage,
}: Input) => {
  return (
    <>
      <input
        type={type}
        name={modelName}
        {...registerProps}
        id={modelName}
        className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
        placeholder={placeHolder}
      />
      {errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}
    </>
  );
};

export default FormControl;
