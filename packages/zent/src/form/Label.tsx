import * as React from 'react';
import cx from 'classnames';
import { FormContext } from './context';

export interface ILabelProps {
  required?: boolean;
}

export const Label: React.FunctionComponent<ILabelProps> = ({
  children,
  required,
}) => {
  const { labelPosition, labelWidth } = React.useContext(FormContext);

  return (
    <label
      className={cx('zent-form-label', {
        'zent-form-label-required': required,
      })}
      style={{
        flexBasis: labelWidth,
        justifyContent: labelPosition,
      }}
    >
      {children}
    </label>
  );
};
