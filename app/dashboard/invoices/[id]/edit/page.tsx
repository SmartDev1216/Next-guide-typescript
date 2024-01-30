import Form from '@/app/ui/invoices/edit-form'
import Broudcrumbs from '@/app/ui/invoices/breadcrumbs'
import {fetchInvoiceById, fetchCustomers } from '@/app/lib/data'
import { customers } from '@/app/lib/placeholder-data'



export default async function page({params} : {params:{id:string}}) {

    const id = params.id;
    console.log(params.id)
    const [invoice,customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers()
    ])
  return (
    <main>
        <Broudcrumbs
            breadcrumbs={[
                {label:'Invoices',href: '/dashboard/invoices' },
                {label:'Edit Invoices',
                href: `/dashboard/invoices/${id}/edit`,
                 active:true
                }
            ]

            }
        />

        <Form invoice={invoice} customers={customers} />
    </main>
  )
}
