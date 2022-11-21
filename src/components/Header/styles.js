import { COLORS, FONT_SIZES, SPACING } from "../../services/styles";

const styles = {
  container: {
    backgroundColor: COLORS.WHITE,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  title: {
    color: COLORS.BLACK,
    fontSize: FONT_SIZES.xlarge,
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    top: SPACING.large,
    left: SPACING.medium,
  },
  icon: { width: 15, height: 15 },
};

export default styles;
