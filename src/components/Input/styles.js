
import { COLORS, BORDER_RADIUS, SPACING } from "../../services/styles";

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.GRAY,
    borderRadius: BORDER_RADIUS.medium,
    paddingHorizontal: SPACING.medium,
  },
  input: {
    height: 40,
    flexGrow: 1,
  },
  icon: {
    width: 20,
    height: 20,
  },
};

export default styles;
