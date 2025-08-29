/**
 * PUBLIC_INTERFACE
 * Apply theme to document and localStorage.
 */
export function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (theme === "dark") document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", theme);
}
