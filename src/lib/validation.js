export const validateField = {
  firstName: (value) => {
    let result = "";

    if (!value || value.trim().length === 0) {
      result = "First name must be at least 1 character.";
    }

    return result;
  },

  lastName: (value) => {
    let result = "";

    if (!value || value.trim().length === 0) {
      result = "Last name must be at least 1 character.";
    }

    return result;
  },

  email: (value) => {
    let result = "";

    if (!value || value.trim().length === 0) {
      result = "Email must be at least 1 character.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      result = "Email must be in format name@domain.com.";
    }

    return result;
  },

  username: (value) => {
    let result = "";

    if (!value || value.trim().length === 0) {
      result = "Username must be at least 1 character.";
    } else if (value.trim().length < 5 || value.trim() > 16) {
      result = "Username must be between 5 and 16 characters.";
    }

    return result;
  },
  password: (value, fields) => {
    let result = "";
    const { confirmPassword } = fields;

    if (!value || value.trim().length < 8) {
      result = "Password must be at least 8 characters";
    } else if (confirmPassword && value !== confirmPassword) {
      result = "Passwords must match";
    }

    return result;
  },
  confirmPassword: (value, fields) => {
    let result = "";
    const { password } = fields;

    if (!value || value.trim().length < 8) {
      result = "Password must be at least 8 characters";
    } else if (value !== password) {
      result = "Passwords must match";
    }

    return result;
  },
};

export default { validateField };
