var isValid = function(s) {
  while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
        s = s.replace("()", "").replace("[]", "").replace("{}", "");
    }
    return s.length === 0;
    };
