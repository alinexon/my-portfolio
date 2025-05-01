"use client";

import Image from "next/image";

type Props = {
  isRightSidebarOpen: boolean;
};

function MainContent({ isRightSidebarOpen }: Props) {
  return (
    <main
      className={`transition-all duration-300 px-16 py-16 min-h-screen relative z-10 lg:ml-62 ${
        isRightSidebarOpen ? "lg:translate-x-[-12rem]" : "lg:translate-x-0"
      }`}
    >
      <section id="home" className="min-h-screen">
        <div className="w-full h-16 mx-auto text-center">
          <Image
            src="/images/mountain.png"
            alt="bg Photo"
            width={1000}
            height={300}
            className="h-[400px] w-[1200px] opacity-50"
          />
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl text-muted-foreground">
            I build beautiful, responsive, and user-friendly web applications. I
          </p>
        </div>
      </section>
    </main>
  );
}

export default MainContent;

// "use client";

// import Image from "next/image";
// import React from "react";

// type Props = {
//   isRightSidebarOpen: boolean;
// };

// function MainContant({ isRightSidebarOpen }: Props) {
//   return (
//     <main
//       className={`transition-all duration-300 px-4 py-6 min-h-screen relative z-10 ${
//         isRightSidebarOpen ? "lg:mr-64 " : "lg:-mr-64"
//       }`}
//     >
//       <section id="home" className="min-h-screen">
//         <div className="max-w-[1000px] h-64 mx-auto text-center">
//           <Image
//             src="/images/profileimg.png"
//             alt="bg Photo"
//             width={1000}
//             height={300}
//           />
//           <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
//           <p className="text-xl text-muted-foreground">
//             I build beautiful, responsive, and user-friendly web applications. I
//             build beautiful, responsive, and user-friendly web applications. I
//             build beautiful, responsive, and user-friendly web applications. I
//             build beautiful, responsive, and user-friendly web applications. I
//             build beautiful, responsive, and user-friendly web applications. I
//             build beautiful, responsive, and user-friendly web applications. I
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default MainContant;
