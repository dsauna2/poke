import dynamic from "next/dynamic";

const DynamicOwnerRezWidget = dynamic(
  () => import("../../widgets").then((mod) => mod.availabilityWidget),
  {
    ssr: false,
    loading: () => <p>Loading...</p>, // Optional loading component
  }
);

export default function page() {
  return <DynamicOwnerRezWidget />;
}
