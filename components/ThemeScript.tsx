export function ThemeScript() {
  const script = `
    (function () {
      try {
        var stored = window.localStorage.getItem('portfolio-theme');
        var theme = stored === 'light' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })();
  `;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
