import dynamic from "next/dynamic";

const DynamicOwnerRezWidget = dynamic(
  () => import("../../widgets").then((mod) => mod.BookWidget),
  {
    ssr: false,
    loading: () => <p>Loading...</p>, // Optional loading component
  }
);

export default function page() {
  return (
    <div className="p-5">
      <DynamicOwnerRezWidget />
    </div>
  );
}
