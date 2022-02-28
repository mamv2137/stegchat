import React, { Dispatch, SetStateAction, useState } from 'react';
import Gun, { SEA } from 'gun';

import { IGunStaticSEA } from 'gun/types/static/sea';
import { IGunChainReference } from 'gun/types/chain';

import 'gun/sea';

const gun = Gun({
  peers: ['https://stegchat-gun-node.herokuapp.com/gun'],
});

// const gunUser = gun.user().recall({ sessionStorage: true });
interface IGunContext {
  gun: IGunChainReference<any, any, 'pre_root'>;
  SEA: IGunStaticSEA;
  // gunUser: IGunChainReference;
  gunAuthHandler: Dispatch<SetStateAction<boolean>>;
  isGunUserAuthenticated: boolean;
}

const GunContext = React.createContext<IGunContext>({});

const GunProvider: React.FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <GunContext.Provider
      value={{
        gun,
        SEA,
        gunAuthHandler: setIsLogged,
        isGunUserAuthenticated: isLogged,
      }}>
      {children}
    </GunContext.Provider>
  );
};

const useGun = () => {
  const context = React.useContext(GunContext);

  return context;
};

export { GunProvider, useGun };
export default GunContext;
