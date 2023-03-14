import { Component } from 'solid-js';
import { store, logout } from '../store';

const LogoutButton: Component = () => {
  const isLoggedIn = store.isLoggedIn;

  function handleClick() {
    logout();
  }
  return (
    <button
      type='button'
      class="bg-transparent hover:bg-gray-100 font-semibold hover:text-gray-800 py-1 px-2 border-1 border-black hover:border-gray-200 rounded-lg"
      onClick={handleClick}>
      {isLoggedIn ? (
        <span class="i-mdi-logout text-lg"></span>
      ) : (
        <span class="i-mdi-login text-lg"></span>
      )}
    </button>
  );
};

export default LogoutButton;
