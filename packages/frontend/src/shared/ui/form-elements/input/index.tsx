import classNames from 'classnames';
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';

import { ErrorMessage } from '#/shared/ui/form-elements/error';

export type InputSize = 'medium' | 'large';
export type InputType = 'text' | 'email' | 'number';

export type InputProps = {
  id: string;
  name: string;
  label: string;
  errors?: string;
  type?: InputType;
  size?: InputSize;
  className?: string;
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'>;

// Using maps so that the full Tailwind classes can be seen for purging
// see https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html

const sizeMap: { [key in InputSize]: string } = {
  medium: 'p-2 text-base',
  large: 'p-4 text-base',
};

export const FormInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      label,
      type = 'text',
      size = 'medium',
      className = '',
      placeholder,
      errors,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          aria-label={label}
          placeholder={placeholder}
          className={classNames([
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
            sizeMap[size],
            className,
          ])}
          {...props}
        />
        {errors && <ErrorMessage message={errors} />}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
