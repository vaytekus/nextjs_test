import DiscountCode from "./discountCode";

export default async function DiscountCodePageLoader() {
  const isShowDiscountCode = true;

  return (
    <div>
      {isShowDiscountCode && <DiscountCode />}
    </div>
  )
}
