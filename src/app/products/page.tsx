'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { DataTable } from '@/components/DataTable/DataTable'
import { ColumnDef } from '@tanstack/react-table'

export type Payment = {
  id: string
  name: string
  barCode: number
  price: number
  status: 'true' | 'false'
}

export default function Products() {
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: 'name',
      header: 'Descrição',
    },
    {
      accessorKey: 'barCode',
      header: 'Código de Barra',
    },
    {
      accessorKey: 'price',
      header: 'Preço',
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
  ]

  const data: Payment[] = [
    {
      id: '728ed52f',
      name: 'Blusa Branca',
      status: 'true',
      barCode: 112255448,
      price: 114.8,
    },
  ]

  const handleRowClick = (payment: Payment) => {
    setSelectedPayment(payment)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setSelectedPayment(null)
  }

  return (
    <div>
      <div className="p-2">
        <DataTable columns={columns} data={data} onRowClick={handleRowClick} />
      </div>

      {selectedPayment && (
        <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedPayment.name}</DialogTitle>
              <DialogDescription>
                <p>Código de Barra: {selectedPayment.barCode}</p>
                <p>Preço: {selectedPayment.price}</p>
                <p>Status: {selectedPayment.status}</p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
