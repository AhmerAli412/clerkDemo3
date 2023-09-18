import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignInWithMetamaskButton, UserButton, useUser } from '@clerk/clerk-react';
import Fetch from './Fetch.jsx';


const App = () => {
  const { user } = useUser();

  return (
    <>
   
      <SignedIn>
        {user && <div>{user.web3Wallets[0].web3Wallet}</div>}
        <UserButton afterSignOutUrl={window.location.href} />
      <Fetch/>
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal' />
        <SignInWithMetamaskButton mode='popup' /> {/* Added Metamask button */}
      </SignedOut>
    </>
  );
};

export default App;




