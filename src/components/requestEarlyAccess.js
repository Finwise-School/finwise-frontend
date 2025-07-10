import { useEffect } from 'react';

const EarlyAccessRedirect = () => {
  useEffect(() => {
    // Replace current route in history to prevent back-loop
    window.location.replace('https://forms.gle/wEWKCcHjYmEtoAQw9');
  }, []);

  return null;
};

export default EarlyAccessRedirect;

