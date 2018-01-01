/**
 * Sidebar reducer
 * @param {Boolean} state - The state
 * @param {Object} action - The action
 * @return {Boolean} - The new state
 */
export default function(state = false, action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return true;
    case 'CLOSE_SIDEBAR':
      return false;
    case 'TOGGLE_SIDEBAR':
      return !state;
    default:
      return state;
  }
}
