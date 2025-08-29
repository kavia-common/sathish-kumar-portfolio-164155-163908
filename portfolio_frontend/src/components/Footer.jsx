export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 py-8 border-t border-slate-200 dark:border-slate-700">
      <div className="container-padded flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-300">
        <p>&copy; {year} Sathish Kumar. All rights reserved.</p>
        <p className="opacity-80">Built with React, TailwindCSS, Framer Motion.</p>
      </div>
    </footer>
  );
}
