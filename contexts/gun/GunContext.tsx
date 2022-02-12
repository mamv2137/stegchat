import React from 'react';
import Gun from 'gun';

const gun = Gun({ peers: ['https://mvp-gun.herokuapp.com/gun'] });

const GunContext = React.createContext<any>(null);

const GunProvider: React.FC = ({ children }) => {
  return <GunContext.Provider value={{ gun }}>{children}</GunContext.Provider>;
};

const useGun = () => {
  const context = React.useContext(GunContext);

  return context.gun;
};

export { GunProvider, useGun };
export default GunContext;
