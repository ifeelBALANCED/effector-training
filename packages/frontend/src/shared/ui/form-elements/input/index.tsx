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

const sizeMap: Record<InputSize, string> = {
  medium: 'p-2 text-base',
  large: 'p-4 text-base',
};

const inputStyles = {
  base: 'bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5',
  error: 'border-red-600 focus:border-red-600 focus:ring-red-600',
  default: 'border-gray-300',
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
    const classes = classNames({
      [inputStyles.base]: true,
      [sizeMap[size]]: true,
      [inputStyles.error]: !!errors,
      [inputStyles.default]: !errors,
      [className]: !!className,
    });

    return (
      <div>
        <label
          htmlFor={id}
          className={classNames('block mb-2 text-sm font-medium dark:text-white', {
            'text-red-600': !!errors,
            'text-gray-900': !errors,
          })}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className={classes}
          {...props}
        />
        {errors && <ErrorMessage message={errors} />}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
