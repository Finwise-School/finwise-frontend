import React, { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    // Redirect on component mount
    window.location.replace('https://finwiseschool.gumroad.com/l/fwsbudgetboss');
  }, []);

  return (
    <div>
      Redirecting... If you are not redirected,{' '}
      <a href="https://finwiseschool.gumroad.com/l/fwsbudgetboss">click here</a>.
    </div>
  );
};

export default RedirectPage;
