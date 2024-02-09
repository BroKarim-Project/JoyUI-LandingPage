import React from 'react';
import classNames from 'classnames';

const SectionContainer = ({ children, className}) => (
  <div className={classNames('sm:py-18  py-16 mx-auto px-6 ', 'lg:px-16  xl:px-20', className)} >
    {children}
  </div>
);

export default SectionContainer;
