import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
  fontFamily: typography.primary,
  color: colors.lightBiolet,
};

const BASE_BOLD = {
  fontFamily: typography.bold,
  color: colors.blue,
};

const Secondary = {
  fontFamily: typography.secondary,
};

export const presets = {
  default: BASE,
  secondary: Secondary,
  h1: {
    ...BASE_BOLD,
    fontSize: 34,
  },
  h2: {
    ...BASE_BOLD,
    fontSize: 30,
  },
  h3: {
    ...BASE,
    fontSize: 24,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 22,
  },
  h5: {
    ...Secondary,
    fontSize: 22,
  },
  h6: {
    ...Secondary,
    fontSize: 15,
  },
  small: {
    ...BASE,
    fontSize: 17,
  },
};
