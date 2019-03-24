import React from 'react';
import Link from 'next/link';
import { string } from 'prop-types';

const navbarLogo = ({ url, imgSrc, text }) => (
  <Link href={url}>
    <a className="brand-logo">
      {imgSrc && <img src={imgSrc} alt={text || ''} />}
      {text || ''}
    </a>
  </Link>
);

navbarLogo.propTypes = {
  url: string.isRequired,
  imgSrc: string,
  text: string,
};

navbarLogo.defaultProps = {
  imgSrc: null,
  text: '',
};

export default navbarLogo;
