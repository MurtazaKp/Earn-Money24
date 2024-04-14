import LayoutComponent from "@/components/layout";
import React from "react";

const Dashboard = () => {
  return (
    <LayoutComponent>
      <div className="text-center text">Dashboard</div>

      <h2 className="text-2xl mt-1 text-center">
        Welcome to <span className=" text-blue-600 ">Earn Money 24</span>{" "}
      </h2>
      <div className="bg-white  shadow-lg pb-1 rounded-t-lg mt-3">
        <div className="bg-blue-600 rounded-t-lg">
          <h3 className="text-white text-xl p-3 ">Latest News</h3>
        </div>
        <div className="p-3">
          <ul className="list-disc text-blue-600 ps-4">
            <li className="text-black">News1 </li>
            <li className="text-black">News2 </li>
          </ul>
        </div>
      </div>

      <div class="w-full  p-3 grid grid-cols-3 gap-5 px-0 mt-3">
        <div class="flex flex-col bg-white lg:flex-row rounded-lg overflow-hidden h-auto lg:h-32 gap-5 border shadow shadow-lg">
          <img
            class="block h-auto w-full lg:w-auto flex-none h-24"
            src="/income.jpg"
          />
          <div class=" rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between w-full items-stretch  leading-normal">
            <div class="text-black font-bold text-xl mb-2 leading-tight">
              Matching Income
            </div>
            <p class="text-grey-darker text-lg">4500</p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row rounded-lg overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
          <img
            class="block h-auto w-full lg:w-auto flex-none bg-cover h-24"
            src="/target.jpg"
          />
          <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r justify-between p-4 flex flex-col  leading-normal">
            <div class="text-black font-bold text-xl mb-2 leading-tight">
              Left Count
            </div>
            <p class="text-grey-darker text-lg">27</p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row rounded-lg overflow-hidden h-auto lg:h-32 border shadow-lg">
          <img
            class="block h-auto w-full lg:w-auto flex-none bg-cover h-24"
            src="/bussiness.jpg"
          />
          <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r justify-between p-4 flex flex-col  leading-normal">
            <div class="text-black font-bold text-xl mb-2 leading-tight">
              Right Count
            </div>
            <p class="text-grey-3-- text-lg">384</p>
          </div>
        </div>
      </div>

      <div className="mt-3 bg-white border border-t-0">
        <div className="bg-blue-600 rounded-t-lg">
          <h3 className="text-white text-xl p-3 ">Account Details</h3>
        </div>
        <div className="p-3 flex gap-10">
          <div className="w-1/2 flex flex-col gap-4 border-r-2">
            <div className="flex ">
              <p className="text-gray-600 w-4/12 font-bold">Code</p>
              <p className="w-8/12"> SGM76509</p>
            </div>

            <div className="flex ">
              <p className="text-gray-600 w-4/12 font-bold">Joining Date</p>
              <p className="w-8/12">24/06/2023</p>
            </div>

            <div className="flex ">
              <p className="text-gray-600 w-4/12 font-bold">Activation Date</p>
              <p className="w-8/12"> 24/06/2023</p>
            </div>

            <div className="flex ">
              <p className="text-gray-600 w-4/12 font-bold">Package</p>
              <p className="w-8/12"> Package - 3500</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex ">
              <p className="text-gray-600 w-4/12 font-bold">Mobile</p>
              <p className="w-8/12"> 9404865834</p>
            </div>

            <div className="flex ">
              <p className="text-gray-600 w-4/12 font-bold">Sponsor ID</p>
              <p className="w-8/12">SGM76509</p>
            </div>

            <div className="flex ">
              <p className="text-gray-600 w-4/12 font-bold">Sponsor Name</p>
              <p className="w-8/12"> Ap</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default Dashboard;
