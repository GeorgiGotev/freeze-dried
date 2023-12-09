import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { FruitProvider } from './contexts/FruitContext';

import ContactUs from './components/ContactUs';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import Fruits from './components/Catalog/Fruits';
import FruitDetails from './components/DetailsFruit/fruitDetails';
import CreateFruit from './components/CreateFruit/CreateFruit';
import OurService from './components/OurService/OurService';
import EditFruit from './components/EditFruit/EditFruit';
import Profile from './components/Profile/Profile';


function App() {
    return (
        <>
            <AuthProvider>
                <FruitProvider>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route path="/catalog" element={<Fruits />}></Route>
                        <Route path="/catalog/:fruitId/details" element={<FruitDetails />}></Route>
                        <Route path="/catalog/:fruitId/edit" element={<EditFruit />}></Route>
                        {/* <Route path="/catalog/:fruitId/buy" element={<FruitDetails />}></Route> */}
                        <Route path="/create" element={<CreateFruit />}></Route>
                        <Route path="/contacts" element={<ContactUs />}></Route>
                        <Route path="/service" element={<OurService />}></Route>
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                    <Footer />
                </FruitProvider>
            </AuthProvider>
        </>
    );
}

export default App;
