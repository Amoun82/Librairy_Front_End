import React from 'react';

import { HasRoles, hasAuthenticated, HasId } from '../services/AuthApi' ;

export default React.createContext({
  isAuthenticated: hasAuthenticated(),
  setIsAuthenticated: value => {},
  hasRoles: HasRoles(),
  setHasRoles: value => {},
  hasId: HasId(),
  setHasId: value => {},
});