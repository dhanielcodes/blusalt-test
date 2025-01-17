import Card from "@/app/components/Card";
import DashboardLayout from "@/app/layouts/DashboardLayout";
import Image from "next/image";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </DashboardLayout>
  );
}
