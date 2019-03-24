import React from 'react';
import classnames from 'classnames';
import { string, oneOf } from 'prop-types';

const iconComponent = ({ size, icon, className }) => (
  <i className={classnames('material-icons', size, className)}>{icon}</i>
);

iconComponent.propTypes = {
  size: oneOf(['tiny', 'small', 'medium', 'large']),
  icon: string.isRequired,
  className: string,
};

iconComponent.defaultProps = {
  size: 'medium',
  className: '',
};

export default iconComponent;
