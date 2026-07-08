"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";

export default function AdminDashboard() {

  const router = useRouter();

  const [applications, setApplications] = useState<any[]>([]);


  // Fetch applications
  useEffect(() => {

    fetch("/api/applicants")
      .then((res) => res.json())
      .then((data) => {
        setApplications(data.applications || []);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);



  // Total applications
  const totalApplications = applications.length;



  // Today's applications
  const todayApplications = applications.filter((app) => {

    const today = new Date();
    const created = new Date(app.createdAt);

    return today.toDateString() === created.toDateString();

  }).length;



  // Department wise count
  const departmentCount = applications.reduce(
    (acc: any, app: any) => {

      acc[app.department] =
        (acc[app.department] || 0) + 1;

      return acc;

    },
    {}
  );



  // Export Excel
  const exportExcel = () => {

    const worksheet =
      XLSX.utils.json_to_sheet(applications);


    const workbook =
      XLSX.utils.book_new();


    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Applications"
    );


    XLSX.writeFile(
      workbook,
      "Rise_Recruit_Applications.xlsx"
    );

  };



  // Logout
  const logout = () => {

    localStorage.removeItem("admin");

    router.push("/");

  };



  return (

    <div className="min-h-screen bg-gray-100 p-10">


      {/* Header */}

      <div className="flex justify-between items-center">


        <h1 className="text-3xl font-bold text-[#0B1849]">
          Rise & Recruit Admin Dashboard
        </h1>


      </div>



      {/* Dashboard Cards */}

      <div className="grid md:grid-cols-3 gap-6 mt-10">


        <div className="bg-white p-6 rounded-xl shadow">

          <p className="text-gray-500">
            Total Applications
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {totalApplications}
          </h2>

        </div>



        <div className="bg-white p-6 rounded-xl shadow">

          <p className="text-gray-500">
            Today's Applications
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {todayApplications}
          </h2>

        </div>



        <div className="bg-white p-6 rounded-xl shadow">

          <p className="text-gray-500">
            Departments
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {Object.keys(departmentCount).length}
          </h2>

        </div>


      </div>




      {/* Department Count */}

      <div className="bg-white mt-10 p-6 rounded-xl shadow">


        <h2 className="text-xl font-bold mb-4">
          Department-wise Count
        </h2>


        {
          Object.entries(departmentCount).map(
            ([dept, count]) => (

              <p key={dept}>
                {dept} : {String(count)}
              </p>

            )
          )
        }


      </div>





      {/* Applicants Table */}

      <div className="bg-white mt-10 p-6 rounded-xl shadow overflow-x-auto">


        <div className="flex justify-between items-center mb-5">


          <h2 className="text-xl font-bold">
            Applicants
          </h2>



          {/* Buttons */}

          <div className="flex gap-4">


            <button
              onClick={exportExcel}
              className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700"
            >
              Download Excel
            </button>



            <button
              onClick={logout}
              className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700"
            >
              Logout
            </button>


          </div>


        </div>





        <table className="w-full border">


          <thead>

            <tr className="border bg-gray-100">


              <th className="p-2">Name</th>
              <th className="p-2">PRN</th>
              <th className="p-2">Email</th>
              <th className="p-2">Mobile</th>
              <th className="p-2">Course</th>
              <th className="p-2">Year</th>
              <th className="p-2">Department</th>
              <th className="p-2">Accommodation</th>
              <th className="p-2">Preference 1</th>
              <th className="p-2">Preference 2</th>
              <th className="p-2">Preference 3</th>
              <th className="p-2">Preference 4</th>
              <th className="p-2">Why Join</th>


            </tr>

          </thead>





          <tbody>


          {
            applications.map((app) => (

              <tr
                key={app._id}
                className="border text-center"
              >


                <td className="p-2">{app.fullName}</td>

                <td className="p-2">{app.prn}</td>

                <td className="p-2">{app.email}</td>

                <td className="p-2">{app.mobile}</td>

                <td className="p-2">{app.course}</td>

                <td className="p-2">{app.year}</td>

                <td className="p-2">{app.department}</td>

                <td className="p-2">{app.accommodation}</td>

                <td className="p-2">{app.preference1}</td>

                <td className="p-2">{app.preference2}</td>

                <td className="p-2">{app.preference3}</td>

                <td className="p-2">{app.preference4}</td>

                <td className="p-2">{app.whyJoin}</td>


              </tr>

            ))
          }


          </tbody>


        </table>


      </div>



    </div>

  );

}