// EarlyAccessRedirect.jsx
import { useEffect } from 'react';

const EarlyAccessRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://forms.gle/wEWKCcHjYmEtoAQw9';
  }, []);

  return null;               // nothing renders — user is instantly redirected
};

export default EarlyAccessRedirect;
