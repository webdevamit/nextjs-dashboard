import { notFound } from 'next/navigation';
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomerById, fetchCustomers } from '@/app/lib/data';
import EditCustomerForm from '@/app/ui/customers/edit-customer';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const [customers, customer] = await Promise.all([
    fetchCustomers(),
    fetchCustomerById(id),
  ]);

  if (!customer) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Edit Customer',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditCustomerForm customer={customer} customers={customers} />
    </main>
  );
}
