import React from 'react';
import Gun, { SEA } from 'gun';
import 'gun/sea';

const gun = Gun({ peers: ['https://mvp-gun.herokuapp.com/gun'] });

const GunContext = React.createContext<any>(null);

const GunProvider: React.FC = ({ children }) => {
  return (
    <GunContext.Provider value={{ gun, SEA }}>{children}</GunContext.Provider>
  );
};

const useGun = () => {
  const context = React.useContext(GunContext);

  return context;
};

export { GunProvider, useGun };
export default GunContext;
