import React from 'react'
import { Route, Routes} from 'react-router-dom' ;
import Home from './pages/student/Home';

import CoursesList from './pages/student/CoursesList';
import CourseDetails from './pages/student/CourseDetails'; 
import MyEnrollments from './pages/student/MyEnorollments' ; 
import Player from './pages/student/Player' ; 
import Loading from './components/student/Loading' ; 
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled' ;
import Navbar from './components/student/Navbar';

const App = () => {
  return (
    <div>


   <Navbar/> 
     <Routes>
     <Route path='/' element={ <Home/> } /> 
     <Route path='/courses-list' element={ <CoursesList/>  } /> 
     <Route path='/courses-list/:input' element={ <CoursesList/>  } /> 
     <Route path = '/course/:id' element={<CourseDetails/>} />
     <Route path = 'my-enrollments' element={<MyEnrollments/>} /> 
     <Route path = '/player/:courseId' element={<Player/>} /> 
     <Route path = '/player/:courseId' element={<Player/>} /> 
     <Route path = '/loading/:path' elements={<Loading/>} /> 



    


<Route path = '/educator' element = {<Educator/>}>
    <Route path = 'educator' element={<Dashboard/>} /> 
    <Route path = 'add-course' element={<AddCourse/>} /> 
    <Route path = 'my-courses' element={<MyCourses/>} /> 
      <Route path = 'student-enrolled' elements={<StudentsEnrolled/>} />  
</Route>


     

     


     
    
   
     


     
     </Routes>
    </div>
  )
}

export default App 



