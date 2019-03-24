import React from 'react';
import classnames from 'classnames';
import { string, oneOf } from 'prop-types';

const iconComponent = ({ size, icon }) => (
  <i className={classnames('material-icons', size)}>{icon}</i>
);

iconComponent.propTypes = {
  size: oneOf(['tiny', 'small', 'medium', 'large']),
  icon: string.isRequired,
};

iconComponent.defaultProps = {
  size: 'medium',
};

export default iconComponent;
