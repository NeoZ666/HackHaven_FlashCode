// // import React from "react";

// function DecentralizedCMS() {
//   return (
//     <div className="grid grid-rows-[auto 1fr] w-full min-h-screen">
//       <header className="bg-white border-b border-gray-200 dark:border-gray-700">
//         <div className="container px-4">
//           <nav className="flex items-center justify-between h-14">
//             <a
//               className="flex items-center gap-2 text-lg font-semibold"
//               href="#"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-6 h-6"
//               >
//                 <rect width="7" height="7" x="14" y="3" rx="1"></rect>
//                 <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
//               </svg>
//               <span>Decentralized CMS</span>
//             </a>
//             <div className="hidden gap-4 md:flex">
//               <a className="text-sm font-medium leading-none" href="#">
//                 Home
//               </a>
//               <a className="text-sm font-medium leading-none" href="#">
//                 Complaints
//               </a>
//               <a className="text-sm font-medium leading-none" href="#">
//                 Reports
//               </a>
//               <a className="text-sm font-medium leading-none" href="#">
//                 Settings
//               </a>
//             </div>
//             <div className="flex items-center gap-4 md:hidden">
//               <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
//                 New
//               </button>
//               <div>
//                 <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-4 h-4"
//                   >
//                     <circle cx="12.1" cy="12.1" r="1"></circle>
//                   </svg>
//                 </div>
//                 <div className="min-w-[150px]">
//                   <div>Profile</div>
//                   <div>Settings</div>
//                   <div></div>
//                   <div>Logout</div>
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </header>
//       <main className="grid items-start gap-6 px-4 md:gap-10 lg:grid-cols-[250px 1fr]">
//         <nav className="hidden gap-1 text-sm font-medium tracking-wide md:flex">
//           <a
//             className="flex items-center gap-2.5 py-3.5 rounded-md bg-gray-100 dark:bg-gray-800"
//             href="#"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-5 h-5"
//             >
//               <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
//               <polyline points="9 22 9 12 15 12 15 22"></polyline>
//             </svg>
//             Home
//           </a>
//           <a className="flex items-center gap-2.5 py-3.5 rounded-md" href="#">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-5 h-5"
//             >
//               <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
//               <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
//             </svg>
//             Complaints
//           </a>
//           <a className="flex items-center gap-2.5 py-3.5 rounded-md" href="#">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-5 h-5"
//             >
//               <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
//               <polyline points="14 2 14 8 20 8"></polyline>
//             </svg>
//             Reports
//           </a>
//           <a className="flex items-center gap-2.5 py-3.5 rounded-md" href="#">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-5 h-5"
//             >
//               <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//               <circle cx="12" cy="7" r="4"></circle>
//             </svg>
//             Users
//           </a>
//           <a className="flex items-center gap-2.5 py-3.5 rounded-md" href="#">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-5 h-5"
//             >
//               <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
//               <circle cx="12" cy="12" r="3"></circle>
//             </svg>
//             Settings
//           </a>
//         </nav>
//         <div className="grid items-start gap-4 md:flex-1">
//           <div className="grid gap-4">
//             <div className="grid gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
//               <div className="flex items-center gap-4">
//                 <div className="flex-1">
//                   <h1 className="text-lg font-semibold">Total Users</h1>
//                   <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                     Registered users in the system
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-8 h-8"
//                   >
//                     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//                     <circle cx="9" cy="7" r="4"></circle>
//                     <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//                     <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                   </svg>
//                   <h2 className="text-2xl font-bold tracking-tighter">1,234</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="grid gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
//               <div className="flex items-center gap-4">
//                 <div className="flex-1">
//                   <h1 className="text-lg font-semibold">Active Complaints</h1>
//                   <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                     Complaints currently being processed
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-8 h-8"
//                   >
//                     <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"></path>
//                     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//                     <path d="M20 14v4"></path>
//                     <path d="M20 22v.01"></path>
//                   </svg>
//                   <h2 className="text-2xl font-bold tracking-tighter">345</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="grid gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
//               <div className="flex items-center gap-4">
//                 <div className="flex-1">
//                   <h1 className="text-lg font-semibold">Resolved Complaints</h1>
//                   <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                     Complaints successfully resolved
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-8 h-8"
//                   >
//                     <polyline points="20 6 9 17 4 12"></polyline>
//                   </svg>
//                   <h2 className="text-2xl font-bold tracking-tighter">789</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="grid gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
//               <div className="flex items-center gap-4">
//                 <div className="flex-1">
//                   <h1 className="text-lg font-semibold">Pending Complaints</h1>
//                   <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                     Complaints awaiting resolution
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-8 h-8"
//                   >
//                     <path d="M17 6.1H3"></path>
//                     <path d="M21 12.1H3"></path>
//                     <path d="M15.1 18H3"></path>
//                   </svg>
//                   <h2 className="text-2xl font-bold tracking-tighter">123</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="grid gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
//             <div className="flex items-center justify-between gap-4">
//               <h1 className="text-lg font-semibold">Recent Complaints</h1>
//               <a className="text-sm font-medium underline" href="#">
//                 View all
//               </a>
//             </div>
//             <div className="grid gap-4 text-sm">
//               <div className="grid gap-1">
//                 <div className="flex items-center gap-4">
//                   <img
//                     src="/placeholder.svg"
//                     width="40"
//                     height="40"
//                     alt="User 1"
//                     className="rounded-full"
//                     style={{ aspectRatio: "40 / 40", objectFit: "cover" }}
//                   />
//                   <div className="flex-1">
//                     <h2 className="text-base font-semibold">
//                       Pothole on Main Street
//                     </h2>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Submitted by: Alice Johnson
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="w-4 h-4"
//                     >
//                       <rect
//                         width="18"
//                         height="18"
//                         x="3"
//                         y="4"
//                         rx="2"
//                         ry="2"
//                       ></rect>
//                       <line x1="16" x2="16" y1="2" y2="6"></line>
//                       <line x1="8" x2="8" y1="2" y2="6"></line>
//                       <line x1="3" x2="21" y1="10" y2="10"></line>
//                     </svg>
//                     <time className="text-sm font-medium not-italic">
//                       2 hours ago
//                     </time>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid gap-1 border-t border-gray-200 dark:border-gray-800"></div>
//               <div className="grid gap-1">
//                 <div className="flex items-center gap-4">
//                   <img
//                     src="/placeholder.svg"
//                     width="40"
//                     height="40"
//                     alt="User 2"
//                     className="rounded-full"
//                     style={{ aspectRatio: "40 / 40", objectFit: "cover" }}
//                   />
//                   <div className="flex-1">
//                     <h2 className="text-base font-semibold">
//                       Graffiti in the Park
//                     </h2>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Submitted by: Bob Smith
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="w-4 h-4"
//                     >
//                       <rect
//                         width="18"
//                         height="18"
//                         x="3"
//                         y="4"
//                         rx="2"
//                         ry="2"
//                       ></rect>
//                       <line x1="16" x2="16" y1="2" y2="6"></line>
//                       <line x1="8" x2="8" y1="2" y2="6"></line>
//                       <line x1="3" x2="21" y1="10" y2="10"></line>
//                     </svg>
//                     <time className="text-sm font-medium not-italic">
//                       5 hours ago
//                     </time>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid gap-1 border-t border-gray-200 dark:border-gray-800"></div>
//               <div className="grid gap-1">
//                 <div className="flex items-center gap-4">
//                   <img
//                     src="/placeholder.svg"
//                     width="40"
//                     height="40"
//                     alt="User 3"
//                     className="rounded-full"
//                     style={{ aspectRatio: "40 / 40", objectFit: "cover" }}
//                   />
//                   <div className="flex-1">
//                     <h2 className="text-base font-semibold">
//                       Broken Streetlights
//                     </h2>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Submitted by: Claire Davis
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="w-4 h-4"
//                     >
//                       <rect
//                         width="18"
//                         height="18"
//                         x="3"
//                         y="4"
//                         rx="2"
//                         ry="2"
//                       ></rect>
//                       <line x1="16" x2="16" y1="2" y2="6"></line>
//                       <line x1="8" x2="8" y1="2" y2="6"></line>
//                       <line x1="3" x2="21" y1="10" y2="10"></line>
//                     </svg>
//                     <time className="text-sm font-medium not-italic">
//                       1 day ago
//                     </time>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default DecentralizedCMS;
// import React from "react";

function DecentralizedCMS() {
  return (
    <div className="grid grid-rows-[auto 1fr] w-full min-h-screen">
      <header className="flex items-center px-4 border-b gap-4 h-16">
        <a
          className="flex items-center gap-2 text-lg font-semibold"
          href="#"
          rel="ugc"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path>
          </svg>
          <span>Complaint Management</span>
        </a>
        <nav className="ml-auto flex items-center gap-4 text-sm font-medium">
          <a
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#"
            rel="ugc"
          >
            Dashboard
          </a>
          <a
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#"
            rel="ugc"
          >
            Complaints
          </a>
          <a
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#"
            rel="ugc"
          >
            Statistics
          </a>
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-6 h-6"></span>
              <span className="text-sm font-medium">User</span>
              <div className="w-4 h-4 opacity-50"></div>
            </div>
            <div className="mt-2 w-44">
              <div>
                <div>
                  <div className="w-4 h-4 mr-2 opacity-50"></div>
                  Profile
                </div>
                <div>
                  <div className="w-4 h-4 mr-2 opacity-50"></div>
                  Settings
                </div>
                <div></div>
                <div>
                  <div className="w-4 h-4 mr-2 opacity-50"></div>
                  Logout
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-col gap-4 p-4">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                Complaints
              </h3>
              <div>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                  New
                </button>
              </div>
            </div>
            <div className="p-0">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    <div>Complaint</div>
                    <div>Status</div>
                    <div>Date</div>
                  </th>
                  <tbody className="[&amp;_tr:last-child]:border-0">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
                            <polyline points="15,9 18,9 18,11"></polyline>
                            <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"></path>
                            <line x1="6" x2="7" y1="10" y2="10"></line>
                          </svg>
                          <span className="font-medium">Garbage Dumping</span>
                        </div>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div
                          className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                          color="yellow"
                        >
                          Pending
                        </div>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        2023-08-15
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M9.3 6.2a4.55 4.55 0 0 0 5.4 0"></path>
                            <path d="M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"></path>
                            <path d="M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"></path>
                            <path d="m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"></path>
                          </svg>
                          <span className="font-medium">
                            Potholes on Main Street
                          </span>
                        </div>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div
                          className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                          color="green"
                        >
                          Resolved
                        </div>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        2023-08-10
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M9.3 6.2a4.55 4.55 0 0 0 5.4 0"></path>
                            <path d="M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"></path>
                            <path d="M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"></path>
                            <path d="m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"></path>
                          </svg>
                          <span className="font-medium">
                            Traffic Congestion
                          </span>
                        </div>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div
                          className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                          color="green"
                        >
                          Resolved
                        </div>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        2023-08-05
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                          <span className="font-medium">
                            Street Light Not Working
                          </span>
                        </div>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div
                          className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                          color="green"
                        >
                          Resolved
                        </div>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        2023-08-01
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                Submit a Complaint
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <label
                  className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
                  htmlFor="complaint"
                >
                  Title
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="complaint"
                  placeholder="Enter the title of your complaint"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                  id="description"
                  placeholder="Enter the description of your complaint"
                ></textarea>
              </div>
              <div className="space-y-2">
                <label
                  className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
                  htmlFor="category"
                >
                  Category
                </label>
                <option>Infrastructure</option>
                <option>Sanitation</option>
                <option>Public Safety</option>
                <select
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{
                    position: "absolute",
                    border: "0px",
                    width: "1px",
                    height: "1px",
                    padding: "0px",
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    whiteSpace: "nowrap",
                    overflowWrap: "normal",
                  }}
                ></select>
              </div>
              <div className="mt-4 space-x-2">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                Complaint Statistics
              </h3>
            </div>
            <div className="flex items-center justify-center p-8">
              <div className="w-full max-w-[300px] aspect-[1/1]">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DecentralizedCMS;
