import React from 'react';
import Link from 'next/link';
import { string } from 'prop-types';

const navbarLogo = ({ url, imgSrc, text }) => (
  <Link href={url} className="brand-logo">
    <a>
      {imgSrc && <img src={imgSrc} alt={text || ''} />}
      {text || ''}
    </a>
  </Link>
);

navbarLogo.propTypes = {
  url: string.isRequired,
  imgSrc: string,
  text: string.isRequired,
};

navbarLogo.defaultProps = {
  imgSrc: null,
};

export default navbarLogo;
