import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LayoutGrid } from 'lucide-react'

export function DrawerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            className="p-2 text-primary-foreground hover:bg-muted"
          >
            <LayoutGrid />
          </Button>
          <p className="ml-3 text-xl font-bold text-primary-foreground">
            Style Sync
          </p>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] bg-muted">
        <SheetHeader>
          <SheetTitle className="mt-8 text-2xl">Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col space-y-4">
          <SheetClose asChild>
            <Link
              href="/products"
              className="mt-4 text-foreground hover:text-muted-foreground"
            >
              Produtos
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/reports"
              className="mt-4 text-foreground hover:text-muted-foreground"
            >
              Relatório
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
