// differentiate joi errors from custom errors
export const parseError = err => {
    if (err.isJoi) return err.details[0];
    return JSON.stringify(err, Object.getOwnPropertyNames(err));
  };

// object containing what we want to save to our session and send back to redux store
export const sessionizeUser = user => {
return { userId: user.id, username: user.username };
}