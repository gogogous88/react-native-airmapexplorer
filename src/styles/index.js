import { StyleSheet } from "react-native";

const styles = {
  fullscreen: {
    flex: 1
  },
  centered: {
    justifyContent: "center",
    alignItems: "center"
  },
  mapHeader: {
    backgroundColor: "rgba(255, 255, 255, .7)",
    paddingTop: 20
  },

  mapButton: {
    width: 65,
    height: 65,
    borderRadius: 85 / 2,
    backgroundColor: "rgba(252, 253, 253, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowRadius: 8,
    shadowOpacity: 0.12,
    opacity: 0.6,
    zIndex: 10
  },

  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
};

export default styles;
