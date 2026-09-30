import type { Metadata } from "next";
import { CheckoutClient } from "@/components/site/checkout-client";

export const metadata: Metadata = {
  title: "Checkout — ConexionTech",
  description: "Finaliza la contratación de tu plan digital.",
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
