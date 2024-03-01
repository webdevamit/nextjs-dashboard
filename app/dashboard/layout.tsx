import SideNav from '@/app/ui/dashboard/sidenav';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
      <aside
        className="fixed left-0 top-0 z-40 mt-10 w-full md:w-64"
        aria-label="Sidebar"
      >
        <SideNav />
      </aside>
      <div className="mt-10 flex-grow p-4 p-6 sm:ml-64 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}
