import { createBrowserRouter } from "react-router-dom";
import AllUser from "../../Dashboard/AllUser/AllUser";
import Billing from "../../Dashboard/Dashboard/Billing/Billing";
import DashboardLayout from "../../Dashboard/DashboardLayout/DashboardLayout";
import MyMeeting from "../../Dashboard/Meeting/MyMeeting/MyMeeting";
import Main from "../../Layouts/Main/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import BLogPost from "../../Pages/Blog/BLogPost";
import Home from "../../Pages/Home/Home";
import Plans from "../../Pages/Home/Membership/Plan";
import Profile from "../../Pages/Profile/Profile";
import Fifteen from "../../Pages/Schedule/Fifteen/Fifteen";
import Schedule from "../../Pages/Schedule/Schedule/Schedule";
import SixtyMins from "../../Pages/Schedule/SixtyMins/SixtyMins";
import ThirtyMins from "../../Pages/Schedule/ThirtyMins/ThirtyMins";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import Team from "../../Pages/Team/Team";
import CreateTeam from "../../Pages/Team/CreateTeam";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import MySchedule from "../../Pages/Schedule/MySchedule/MySchedule";
import UpdateProfile from "../../Pages/Profile/UpdateProfile";
import Payment from "../../Dashboard/Dashboard/Billing/Payment";
import Availability from "../../Pages/Availablity/Availablity/Availablity";

import AdminRoute from "../AdminRoute/AdminRoute";
import Admin from "../../Dashboard/Dashboard/Admin/Admin";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/plan",
        element: <Plans></Plans>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blogPost",
        element: <BLogPost></BLogPost>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/schedule",
    element: <Schedule></Schedule>,
    children: [
      {
        path: "/schedule/fifteen",
        element: <Fifteen></Fifteen>,
      },
      {
        path: "/schedule/thirty",
        element: <ThirtyMins></ThirtyMins>,
      },
      {
        path: "/schedule/sixteen",
        element: <SixtyMins></SixtyMins>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/allUser",
        element: <AllUser />,
      },
      {
        path: "/dashboard/myMeeting",
        element: <MyMeeting />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/updateProfile",
        element: <UpdateProfile />,
      },
      {
        path: "/dashboard/billing",
        element: <Billing />,
      },
      {
        path: "/dashboard/billing/membership/:id",
        element: <Payment />,
      },
      {
        path: "/dashboard/createTeam",
        element: <CreateTeam />,
      },
      {
        path: "/dashboard/team",
        element: <Team />,
      },
      {
        path: '/dashboard/mySchedule',
        element: <MySchedule></MySchedule>,
      },
      {

        path: '/dashboard/availability',
        element: <Availability></Availability>,
      },

        path: '/dashboard/admin',
        element: <AdminRoute><Admin /></AdminRoute>
    },
    ],
  },
]);
