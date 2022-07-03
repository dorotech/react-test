import React from "react";

const DarkMode = () => {
  return (
    <div class="col-lg-3 col-12 d-flex justify-content-center gap-2 form-check form-switch p-4">
      <input class="form-check-input" type="checkbox" id="darkMode" />
      <label class="form-check-label" for="darkMode">
        Ligar modo escuro?
      </label>
    </div>
  );
};

export default DarkMode;
