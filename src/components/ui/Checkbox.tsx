import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Input = {
  classNameCheck?: string;
  classNameLabel?: string;
  modelName: string;
  value?: boolean;
  labelName?: string;
  registerProps?: UseFormRegisterReturn;
};

const Checkbox = ({
  classNameCheck = '',
  classNameLabel = '',
  modelName = '',
  value = false,
  labelName = 'Checkbox',
  registerProps,
}: Input) => {
  return (
    <div className="flex items-center">
      <input
        id={modelName}
        name={modelName}
        type="checkbox"
        defaultChecked={value}
        {...registerProps}
        className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${classNameCheck}`}
      />
      <label
        htmlFor={modelName}
        className={`ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${classNameLabel}`}
      >
        {labelName}
      </label>
    </div>
  );
};

export default Checkbox;
