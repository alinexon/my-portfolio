"use client";

import LeftSidebar from "@/components/left-sidebar";
import MainContant from "@/components/main-content";
import RightSidebar from "@/components/right-sidebar";
import React, { useState } from "react";

function Page() {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      <LeftSidebar />
      <div className="flex-1 transition-all duration-300">
        <MainContant isRightSidebarOpen={isRightSidebarOpen} />
      </div>
      <RightSidebar onToggle={setIsRightSidebarOpen} />
    </div>
  );
}

export default Page;

// "use client";

// import LeftSidebar from "@/components/left-sidebar";
// import MainContant from "@/components/main-content";
// import RightSidebar from "@/components/right-sidebar";
// import React, { useState } from "react";

// function Page() {
//   const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen">
//       <div className="w-16 lg:w-16 bg-gray-100">
//         <LeftSidebar />
//       </div>

//       <div className="flex-1 transition-all duration-300">
//         <MainContant isRightSidebarOpen={isRightSidebarOpen} />
//       </div>

//       <RightSidebar onToggle={setIsRightSidebarOpen} />
//     </div>
//   );
// }

// export default Page;

// import LeftSidebar from "@/components/left-sidebar";
// import MainContant from "@/components/main-content";
// import RightSidebar from "@/components/right-sidebar";
// // import { SidebarProvider } from "@/components/ui/sidebar";
// import React from "react";

// function page() {
//   return (
//     <div className="grid grid-cols-[16rem_1fr_16rem] min-h-screen">
//       <LeftSidebar />
//       <MainContant />
//       <RightSidebar />
//     </div>
//   );
// }

// export default page;
