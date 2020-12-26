import React, { useState, useEffect, createContext, useReducer, useContext } from 'react';
import { setUser } from './actions'
import { userReducer, INIT_STATE } from './reducer'

import users from '../../mockData/users'

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INIT_STATE)
  // const [userState, setUserState] = useState(INIT_STATE)
  
  useEffect(() => {
    const user = users.find(user => user.email === 'mamv.2137@gmail.com');
    dispatch(setUser(user))
    // setUserState(prevState => ({ ...prevState, user }))
    // console.log(userState)
  }, [])

  return (
    <UserContext.Provider
      value={{
        userState: state,
        userDispatch: dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useContextUser = () => {
  const { userState, userDispatch } = useContext(UserContext)

  return [ userState, userDispatch ]
}

export { UserContext, UserProvider, useContextUser };
