import Nav from "@/components/nav/nav";
import SummaryCard from "@/components/dashboard/summary/summary-card";
import RevenueOverview from "@/components/dashboard/revenue/revenue-overview";
import {
  cardDetails,
  newCustomerRegisters,
  revenueData,
  topCustomersData,
} from "@/lib/data";
import { Recentstudents , RecentRequests} from "@/components/dashboard/tables/Recentstudents";
import TopStateBySales from "@/components/dashboard/top-state-by-sales";
import RecentActivities from "@/components/dashboard/recent-activities";
import NewCustomerRegistrations from "@/components/dashboard/customer-registrations/new-customer-registrations";
import TopSources from "@/components/dashboard/top-sources";
import TopPages from "@/components/dashboard/top-pages";
import DeviceOrigin from "@/components/dashboard/device-origin/device-origin";
import dynamic from "next/dynamic";
import LastPayments from "@/components/dashboard/top-customers";

const MiniCalendar = dynamic(
  () => import("@/components/calendar/MiniCalendar"),
  { ssr: false }
);

export default async function Dashboard() {
  return (
    <Nav>
      <div className="@container">
        <div className="grid grid-cols-1 gap-3 @md:grid-cols-2 @4xl:grid-cols-4">
          {cardDetails.map((cardDetail, i) => (
            <SummaryCard {...cardDetail} key={i} />
          ))}
        </div>
        {/* <VisitDetails /> */}
        <div className="my-10 grid grid-cols-1 px-3 @3xl:grid-cols-5 md:gap-3">
          <RevenueOverview data={revenueData} />
          <LastPayments data={topCustomersData} />
        </div>
        <Recentstudents />
        {/* <RecentRequests /> */}
        <div className="my-10 grid grid-cols-1 px-3 @3xl:grid-cols-3 md:gap-3">
          <NewCustomerRegistrations data={newCustomerRegisters} />
          <DeviceOrigin />
        </div>
        <div className="my-10 grid grid-cols-1 px-3 @3xl:grid-cols-2 md:gap-3">
          <TopSources />
          <TopPages />
        </div>
        <div className="my-10 grid grid-cols-1 px-3 @3xl:grid-cols-2 md:gap-3">
          <TopStateBySales />
          <RecentActivities />
        </div>
      </div>
    </Nav>
  );
}
