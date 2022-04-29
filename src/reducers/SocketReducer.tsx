export const getSocket = (
  state: { socketio: any } = { socketio: null },
  action: any
) => {
  switch (action.type) {
    case "APPEND_SOCKET":
      return { socketio: action.payload };
    default: {
      return state;
    }
  }
};
