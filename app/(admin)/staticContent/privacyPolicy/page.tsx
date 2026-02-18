import PrivacyPolicy from "@/components/staticContent/privacyPolicy/privacyPolicy";
import { translateArray, countryArray } from "./data.json";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Static content</h2>
        <PrivacyPolicy data={translateArray} countryArray={countryArray} />
      </div>
    </div>
  );
}