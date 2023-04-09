import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

import { ErrorMessage } from '#/shared/ui/form-elements/error';

export type TextareaProps = {
  id: string;
  name: string;
  label: string;
  errors: string;
  className?: string;
} & Omit<
  DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  'size'
>;

export const FormTextarea = ({ label, id, name, value, onChange, errors }: TextareaProps) => {
  return (
    <div className="sm:col-span-2">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        rows={4}
        defaultValue=""
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="Write product description here"
        onChange={onChange}
      />
      {errors && <ErrorMessage message={errors} />}
    </div>
  );
};
