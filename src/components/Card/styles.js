
import { SPACING, COLORS, BORDER_RADIUS } from "../../services/styles";

const styles = {
  container: {
    width: "33.3%",
    padding: SPACING.xsmall,
  },
  content: {
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.medium,
    borderColor: COLORS.GRAY,
    padding: SPACING.small,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    marginBottom: SPACING.xsmall,
  },
  image: {
    width: 35,
    height: 35,
  },
};

export default styles;
