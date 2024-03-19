import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard_layout from "./pages/DashboardLayout"
import UserDashboard from "./pages/UserDashboard"
import ComplaintForm from "./pages/ComplaintForm"
import PendingComplaints from "./pages/PendingComplaints"

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route element={<Dashboard_layout/>}>
      <Route path="user_dashboard" element={<UserDashboard/>} />
      <Route path="file_a_complaint" element={<ComplaintForm/>} />
      <Route path="pending_complaints" element={<PendingComplaints/>} />
    </Route>
   </Routes>
   </BrowserRouter>
  )
}