import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

export type SelectProps = {
  id: string;
  name: string;
  label: string;
  className?: string;
  options: string[];
} & Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, 'size'>;

export const FormSelect = ({ label, options, className, onChange }: SelectProps) => {
  return (
    <div className={className}>
      <label
        htmlFor="category"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id="category"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        onChange={onChange}
      >
        {options.filter(Boolean).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
