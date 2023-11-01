// import React, { useState } from "react";
// import "./Navbar.css";
// import { LiaSearchSolid } from "react-icons/lia";
// import { GrCart } from "react-icons/gr";
// import { BiUserCircle } from "react-icons/bi";
// import { HiChevronDown } from "react-icons/hi";
// import { VscError } from "react-icons/vsc";
// import { BsArrowLeft } from "react-icons/bs";

// const Navbar = () => {
//   const [showPop, setShowPop] = useState(false);
//   const [menu, setMenu] = useState(false);
//   const [input, setInput] = useState(false);
//   const [input1, setInput1] = useState(false);

//   const onPopHandler = () => {
//     setShowPop(!showPop);
//   };

//   const onClickHandler = () => {
//     setShowPop(false);
//   };

//   const onReloadHandler = () => {
//     window.location.reload();
//   };

//   const onOpenMenuHandler = () => {
//     setMenu(!menu);
//   };

//   const onCloseMenuHandler = () => {
//     setMenu(false);
//   };

//   const onSearchHandler = () => {
//     setInput(!input);
//   };

//   const onSearchCloseHandler = () => {
//     setInput(false);
//   };

//   const onInput1Handler = () => {
//     setInput1(!input1);
//   };

//   const onMultiHandler = () => {
//     onClickHandler();
//     onInput1Handler();
//   };

//   const onCloseInput1 = () => {
//     setInput1(false);
//   };

//   return (
//     <>
//       <div className="navbar border border-b-gray-400 px-2 flex justify-between items-center py-2 xl:px-40">
//         {/* >>> 1 <<< */}
//         <div className="line_serach flex justify-between items-center">
//           <div
//             className="nav_menu cursor-pointer w-10 md:hidden"
//             onClick={onOpenMenuHandler}
//           >
//             {menu ? (
//               <div
//                 className="h-[30px] text-[28px] px-1  md:hidden cursor-pointer"
//                 onClick={onCloseMenuHandler}
//               >
//                 <VscError />
//               </div>
//             ) : (
//               <>
//                 <div className="lines"></div>
//                 <div className="lines"></div>
//                 <div className="lines"></div>
//               </>
//             )}
//           </div>
//           <div
//             className="search w-10 px-2 cursor-pointer text-2xl pt-0.5 md:hidden"
//             onClick={onSearchHandler}
//           >
//             <LiaSearchSolid />
//           </div>
//           {input && (
//             <>
//               <div className="input-search flex w-full h-[50px] absolute top-0 left-0 bg-white md:hidden">
//                 <div
//                   className="w-[40px] py-3 text-xl px-3"
//                   onClick={onSearchCloseHandler}
//                 >
//                   <BsArrowLeft />
//                 </div>
//                 <div className="flex w-full border-2 border-sky-700 h-[30px] my-2 mx-3">
//                   <div className="w-10 px-2 h-[30px] cursor-pointer text-[22px] py-0.5 md:hidden">
//                     <LiaSearchSolid />
//                   </div>
//                   <input
//                     className="w-full h-[26px] px-3 outline-none text-sm"
//                     type="text"
//                     autoFocus
//                     placeholder="Search Microsoft 365"
//                   />
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//         {/* >>> 2 <<< */}
//         <div className="logo md:order-first flex justify-between items-center ">
//           <div onClick={onReloadHandler}>
//             <img
//               title="Microsoft"
//               className="h-6 cursor-pointer"
//               src="/Images/ms.png"
//               alt="Microsoft"
//             />
//           </div>
//           <div className="menu_list hidden md:flex mx-7">
//             <div
//               title="Microsoft 365"
//               className="menu_names"
//               onClick={onClickHandler}
//             >
//               Microsoft 365
//             </div>
//             <div title="Teams" className="menu_names" onClick={onClickHandler}>
//               Teams
//             </div>
//             <div
//               title="Windows"
//               className="menu_names"
//               onClick={onClickHandler}
//             >
//               Windows
//             </div>
//             <div
//               title="Surface"
//               className="menu_names"
//               onClick={onClickHandler}
//             >
//               Surface
//             </div>
//             <div title="Xbox" className="menu_names" onClick={onClickHandler}>
//               Xbox
//             </div>
//             <div
//               title="Support"
//               className="menu_names"
//               onClick={onClickHandler}
//             >
//               Support
//             </div>
//           </div>
//         </div>
//         {/* >>> 3 <<< */}
//         <div className="cart_user flex justify-between items-center">
//           <div
//             className="all_micro ml-1 hidden xl:block text-[13px] py-2.5 px-2 pt-2.5 cursor-pointer hover:underline hover:underline-offset-4"
//             title="All Microsoft"
//           >
//             <div className="flex" onClick={onPopHandler}>
//               <p>All Microsoft</p>
//               <div className="mx-1 pt-1 text-sm">
//                 <HiChevronDown />
//               </div>
//             </div>
//           </div>
//           <div
//             className="search ml-1 w-10 xl:flex xl:w-[85px] justify-between items-center cursor-pointer text-2xl py-1 px-2 hidden md:block hover:underline hover:underline-offset-4"
//             onClick={onMultiHandler}
//             title="Search"
//           >
//             <p className="hidden xl:block text-[13px]">Search</p>
//             <div>
//               <LiaSearchSolid />
//             </div>
//             {input1 && (
//               <>
//                 <div className="bg-white w-full h-[50px] lg:h-[57px] absolute top-0 left-0 flex justify-between items-center xl:px-40 md:px-[10px]">
//                   <div onClick={onReloadHandler}>
//                     <img
//                       title="Microsoft"
//                       className="h-6 w-[120px] md:w-[150px] lg:w-[120px] cursor-pointer"
//                       src="/Images/ms.png"
//                       alt="Microsoft"
//                     />
//                   </div>
//                   <div className="flex w-full justify-between items-center">
//                     <div className="border-2 w-full h-[35px] ml-[35px] mr-2 flex border-sky-700">
//                       <input
//                         className="input2 w-full text-sm px-2 outline-none"
//                         type="text"
//                         autoFocus
//                         placeholder="Search Microsoft.com"
//                       />
//                       <div className="serach w-[40px] px-2 py-1">
//                         <LiaSearchSolid />
//                       </div>
//                     </div>
//                     <div
//                       className="border border-black w-[70px] text-sm py-1.5 px-2.5"
//                       onClick={onCloseInput1}
//                     >
//                       Cancel
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//           <div
//             className="cart ml-1 w-10 xl:flex xl:w-[70px] justify-between items-center py-1 px-2 cursor-pointer text-2xl hover:underline hover:underline-offset-4"
//             onClick={onClickHandler}
//             title="Cart"
//           >
//             <p className="hidden xl:block text-[13px]">Cart</p>
//             <div>
//               <GrCart />
//             </div>
//           </div>
//           <div
//             className="user ml-1 w-10 xl:flex xl:w-[85px] justify-between items-center py-1 px-2 cursor-pointer text-2xl hover:underline hover:underline-offset-4"
//             title="Sign In"
//             onClick={onClickHandler}
//           >
//             <p className="hidden xl:block text-[13px]">Sign In</p>
//             <div>
//               <BiUserCircle />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* >>> Pop-Up <<< */}
//       {showPop && (
//         <div className="pop_up border w-[1000px] h-[200px] absolute top-[58px] left-1/2 transform -translate-x-1/2 bg-zinc-200">
//           <div className="all_micro_names flex justify-around text-xs py-3 font-bold">
//             <div className="software w-[168px] pl-[16px] ">Software</div>
//             <div className="pc w-[168px] pl-[16px]">PCs & Devices</div>
//             <div className="entertainment w-[168px] pl-[16px]">
//               Entertainment
//             </div>
//             <div className="business w-[168px] pl-[16px]">Business</div>
//             <div className="developer w-[168px] pl-[16px]">Developer & IT</div>
//             <div className="others w-[168px] pl-[16px]">Others</div>
//           </div>
//           <div className="under_all_micro flex justify-around items-center">
//             <div className="h-[150px] w-[167px] text-xs space-y-3 px-4 py-4 list-none">
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Windows App
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 AI
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 One Drive
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Outlook
//               </li>
//             </div>
//             <div className="h-[150px] w-[167px] text-xs space-y-3 px-4 py-4 list-none">
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Shop Xbox
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Accesories
//               </li>
//             </div>
//             <div className="h-[150px] w-[167px] text-xs space-y-3 px-4 py-4 list-none">
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Xbox Game Pass
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Xbox Live Gold
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Xbox games
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 PC games
//               </li>
//             </div>
//             <div className="h-[150px] w-[167px] text-xs space-y-3 px-4 py-4 list-none">
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Microsoft clous
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Microsoft Security
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Azure
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Dynamics 365
//               </li>
//             </div>
//             <div className="h-[150px] w-[167px] text-xs space-y-3 px-4 py-4 list-none">
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Developer center
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Documentation
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Microsoft Learn
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 AppSource
//               </li>
//             </div>
//             <div className="h-[150px] w-[167px] text-xs space-y-3 px-4 py-4 list-none">
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Free Download
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Education
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Gift Cards
//               </li>
//               <li className="cursor-pointer hover:underline hover:underline-offset-2">
//                 Licensing
//               </li>
//             </div>
//           </div>
//         </div>
//       )}
//       {menu && (
//         <>
//           <div className=" w-full h-[240px] absolute top-[49px] list-none md:hidden text-white font-semibold">
//             <li className="text-sm w-full h-auto border border-b-white bg-gray-500 hover:bg-gray-600 px-3.5 py-4 hover:underline hover:underline-offset-2 cursor-pointer">
//               Microsoft 365
//             </li>
//             <li className="text-sm w-full h-auto border border-b-white bg-gray-500 hover:bg-gray-600 px-3.5 py-4 hover:underline hover:underline-offset-2 cursor-pointer">
//               Teams
//             </li>
//             <li className="text-sm w-full h-auto border border-b-white bg-gray-500 hover:bg-gray-600 px-3.5 py-4 hover:underline hover:underline-offset-2 cursor-pointer">
//               Windows
//             </li>
//             <li className="text-sm w-full h-auto border border-b-white bg-gray-500 hover:bg-gray-600 px-3.5 py-4 hover:underline hover:underline-offset-2 cursor-pointer">
//               Surface
//             </li>
//             <li className="text-sm w-full h-auto border border-b-white bg-gray-500 hover:bg-gray-600 px-3.5 py-4 hover:underline hover:underline-offset-2 cursor-pointer">
//               Xbox
//             </li>
//             <li className="text-sm w-full h-auto border border-b-white bg-gray-500 hover:bg-gray-600 px-3.5 py-4 hover:underline hover:underline-offset-2 cursor-pointer">
//               Support
//             </li>
//           </div>
//         </>
//       )}
//       <div className="body border h-[1000px]" onClick={onClickHandler}>
//         <p className="border my-3 px-3 sm:px-3 md:px-1.5 lg:px-1.5 xl:px-[155px]">
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
//           unde. Deleniti repudiandae quasi maiores nisi, voluptatem porro
//           explicabo laborum est, quod assumenda optio architecto iste voluptate
//           doloremque aspernatur consequuntur amet?
//         </p>
//         <p className="border my-3 px-3 sm:px-3 md:px-1.5 lg:px-1.5 xl:px-[155px]  ">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolore
//           possimus alias recusandae facere necessitatibus aut expedita atque,
//           voluptas maiores et quo blanditiis harum officiis illum dolorum
//           eveniet adipisci? Excepturi.
//         </p>
//         <p className="border my-3 px-3 sm:px-3 md:px-1.5 lg:px-1.5 xl:px-[155px]">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
//           doloribus, commodi nostrum error enim veritatis sed dignissimos
//           provident totam optio illo vitae voluptas hic tempore. Alias sapiente
//           praesentium quae optio?
//         </p>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { LiaSearchSolid } from "react-icons/lia";
import { GrCart } from "react-icons/gr";
import { BiUserCircle } from "react-icons/bi";
import { HiChevronDown } from "react-icons/hi";
import { VscError } from "react-icons/vsc";
import { BsArrowLeft } from "react-icons/bs";

const Navbar = () => {
  const [showPop, setShowPop] = useState(false);
  const [menu, setMenu] = useState(false);
  const [input, setInput] = useState(false);
  const [input1, setInput1] = useState(false);

  const toggleShowPop = () => {
    setShowPop(!showPop);
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const toggleInput = () => {
    setInput(!input);
  };

  const toggleInput1 = () => {
    setInput1(!input1);
  };

  const closeAll = () => {
    setShowPop(false);
    setMenu(false);
    setInput1(false);
  };

  const onReloadHandler = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="navbar border border-b-gray-400 px-2 flex justify-between items-center py-2 xl:px-40">
        {/* >>> 1 <<< */}
        <div className="line_serach flex justify-between items-center">
          <div
            className="nav_menu cursor-pointer w-10 md:hidden"
            onClick={toggleMenu}
          >
            {menu ? (
              <div
                className="h-[30px] text-[28px] px-1  md:hidden cursor-pointer"
                onClick={closeAll}
              >
                <VscError />
              </div>
            ) : (
              <>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
              </>
            )}
          </div>
          <div
            className="search w-10 px-2 cursor-pointer text-2xl pt-0.5 md:hidden"
            onClick={toggleInput}
          >
            <LiaSearchSolid />
          </div>
          {input && (
            <>
              <div className="input-search flex w-full h-[50px] absolute top-0 left-0 bg-white md:hidden">
                <div
                  className="w-[40px] py-3 text-xl px-3"
                  onClick={toggleInput}
                >
                  <BsArrowLeft />
                </div>
                <div className="flex w-full border-2 border-sky-700 h-[30px] my-2 mx-3">
                  <div className="w-10 px-2 h-[30px] cursor-pointer text-[22px] py-0.5 md:hidden">
                    <LiaSearchSolid />
                  </div>
                  <input
                    className="w-full h-[26px] px-3 outline-none text-sm"
                    type="text"
                    autoFocus
                    placeholder="Search Microsoft 365"
                  />
                </div>
              </div>
            </>
          )}
        </div>
        {/* >>> 2 <<< */}
        <div className="logo md:order-first flex justify-between items-center ">
          <div onClick={onReloadHandler}>
            <img
              title="Microsoft"
              className="h-6 cursor-pointer"
              src="/Images/ms.png"
              alt="Microsoft"
            />
          </div>
          <div className="menu_list hidden md:flex mx-7">
            {[
              "Microsoft 365",
              "Teams",
              "Windows",
              "Surface",
              "Xbox",
              "Support",
            ].map((item) => (
              <div
                key={item}
                title={item}
                className="menu_names"
                onClick={closeAll}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        {/* >>> 3 <<< */}
        <div className="cart_user flex justify-between items-center">
          <div
            className="all_micro ml-1 hidden xl:block text-[13px] py-2.5 px-2 pt-2.5 cursor-pointer hover:underline hover:underline-offset-4"
            title="All Microsoft"
          >
            <div className="flex" onClick={toggleShowPop}>
              <p>All Microsoft</p>
              <div className="mx-1 pt-1 text-sm">
                <HiChevronDown />
              </div>
            </div>
          </div>
          <div
            className="search ml-1 w-10 xl:flex xl:w-[85px] justify-between items-center cursor-pointer text-2xl py-1 px-2 hidden md:block hover:underline hover:underline-offset-4"
            onClick={toggleInput1}
            title="Search"
          >
            <p className="hidden xl:block text-[13px]">Search</p>
            <div>
              <LiaSearchSolid />
            </div>
            {input1 && (
              <>
                <div className="bg-white w-full h-[50px] lg:h-[57px] absolute top-0 left-0 flex justify-between items-center xl:px-40 md:px-[10px]">
                  <div onClick={onReloadHandler}>
                    <img
                      title="Microsoft"
                      className="h-6 w-[120px] md:w-[150px] lg:w-[120px] cursor-pointer"
                      src="/Images/ms.png"
                      alt="Microsoft"
                    />
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <div className="border-2 w-full h-[35px] ml-[35px] mr-2 flex border-sky-700">
                      <input
                        className="input2 w-full text-sm px-2 outline-none"
                        type="text"
                        autoFocus
                        placeholder="Search Microsoft.com"
                      />
                      <div className="serach w-[40px] px-2 py-1">
                        <LiaSearchSolid />
                      </div>
                    </div>
                    <div
                      className="border border-black w-[70px] text-sm py-1.5 px-2.5"
                      onClick={toggleInput1}
                    >
                      Cancel
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </>
            )}{" "}
          </div>{" "}
          {["Cart", "Sign In"].map((item) => (
            <div
              key={item}
              className="cart ml-1 w-10 xl:flex xl:w-[80px] justify-between items-center py-1 px-2 cursor-pointer text-2xl hover:underline hover:underline-offset-4"
              onClick={closeAll}
              title={item}
            >
              {" "}
              <p className="hidden xl:block text-[13px]">{item}</p>{" "}
              {item === "Cart" ? <GrCart /> : <BiUserCircle />}{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {showPop && (
          <div className="pop_up border w-[1000px] h-[200px] absolute top-[58px] left-1/2 transform -translate-x-1/2 bg-zinc-200">
            <div className="all_micro_names flex justify-around text-xs py-3 font-bold">
              <div className="software w-[168px] pl-[16px] ">Software</div>
              <div className="pc w-[168px] pl-[16px]">PCs & Devices</div>
              <div className="entertainment w-[168px] pl-[16px]">
                Entertainment
              </div>
              <div className="business w-[168px] pl-[16px]">Business</div>
              <div className="developer w-[168px] pl-[16px]">
                Developer & IT
              </div>
              <div className="others w-[168px] pl-[16px]">Others</div>
            </div>
            <div className="under_all_micro flex justify-around items-center">
              <div className="h-[150px] w-[167px] text-xs space-y-3 px-4 py-4 list-none">
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Windows App
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  AI
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  One Drive
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Outlook
                </li>
              </div>
              <div className="h-[150px] w-[167px] text-xs space-y-3 px-4 py-4 list-none">
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Shop Xbox
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Accesories
                </li>
              </div>
              <div className="h-[150px] w-[167px] text-xs space-y-3 px-4 py-4 list-none">
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Xbox Game Pass
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Xbox Live Gold
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Xbox games
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  PC games
                </li>
              </div>
              <div className="h-[150px] w-[167px] text-xs space-y-3 px-4 py-4 list-none">
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Microsoft clous
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Microsoft Security
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Azure
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Dynamics 365
                </li>
              </div>
              <div className="h-[150px] w-[167px] text-xs space-y-3 px-4 py-4 list-none">
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Developer center
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Documentation
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Microsoft Learn
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  AppSource
                </li>
              </div>
              <div className="h-[150px] w-[167px] text-xs space-y-3 px-4 py-4 list-none">
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Free Download
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Education
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Gift Cards
                </li>
                <li className="cursor-pointer hover:underline hover:underline-offset-2">
                  Licensing
                </li>
              </div>
            </div>{" "}
          </div>
        )}{" "}
        {menu && (
          <div className=" w-full h-[240px] absolute top-[49px] left-0 list-none md:hidden text-white font-semibold">
            {[
              "Microsoft 365",
              "Teams",
              "Windows",
              "Surface",
              "Xbox",
              "Support",
            ].map((item) => (
              <li
                key={item}
                className="text-sm w-full h-auto border border-b-white bg-gray-500 hover:bg-gray-600 px-3.5 py-4 hover:underline hover:underline-offset-2 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </div>
        )}
      </div>
      <div className="body border h-[1000px]" onClick={closeAll}>
        <p className="border my-3 px-3 sm:px-3 md:px-1.5 lg:px-1.5 xl:px-[155px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
          unde. Deleniti repudiandae quasi maiores nisi, voluptatem porro
          explicabo laborum est, quod assumenda optio architecto iste voluptate
          doloremque aspernatur consequuntur amet?
        </p>
        <p className="border my-3 px-3 sm:px-3 md:px-1.5 lg:px-1.5 xl:px-[155px]  ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolore
          possimus alias recusandae facere necessitatibus aut expedita atque,
          voluptas maiores et quo blanditiis harum officiis illum dolorum
          eveniet adipisci? Excepturi.
        </p>
        <p className="border my-3 px-3 sm:px-3 md:px-1.5 lg:px-1.5 xl:px-[155px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          doloribus, commodi nostrum error enim veritatis sed dignissimos
          provident totam optio illo vitae voluptas hic tempore. Alias sapiente
          praesentium quae optio?
        </p>
      </div>
    </>
  );
};

export default Navbar;
