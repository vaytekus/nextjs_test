import DiscountCodePageLoader from "@/components/orders/discountCode/discountCodePageLoader";

export default function DiscountCodePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Discount Code</h2>
        <DiscountCodePageLoader />
      </div>
    </div>
  );
}