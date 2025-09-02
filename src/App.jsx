import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/JobListing";
import Job from "./pages/job";
import PostJob from "./pages/PostJob";
import SavedJobs from "./pages/SavedJobs";
import MyJobs from "./pages/MyJobs";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/job/:id",
        element: <Job />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/saved-job",
        element: <SavedJobs />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
