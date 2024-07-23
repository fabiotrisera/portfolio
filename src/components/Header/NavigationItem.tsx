
function NavigationItem({ title, href }: { title: string, href: string}) {
  return (
    <a
    className="font-semibold hover:text-blue-600 dark:hover:text-slate-100"
    href={`#${href}`}>
    {title}
  </a>
  );
}

export default NavigationItem;