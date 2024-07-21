import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from '../Pages/About';
import Home from '../Pages/Home';
import Navigation from '../components/Navigation';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import PostCamapaign from '../Pages/PostCampaign';
import PostProduct from '../Pages/PostProduct';
import CampaignDetail from './CampaignDetail';
import MyCampaigns from '../Pages/MyCampaigns';
import CampaignPut from './CampaignPut';

const CustomerRouters = () => {

    return (
        <div>
            <div>
                <Navigation />
            </div>

            <Routes>

                <Route path='/' element={<Home />}></Route>

                <Route path='/about' element={<About />}></Route>

                <Route path='/post-product' element={<PostProduct />}></Route>

                <Route path='/post-campaign' element={<PostCamapaign />}></Route>

                <Route path="/campaigns/:id" element={<CampaignDetail />} />

                <Route path="/my-campaigns" element={<MyCampaigns />} />

                <Route path="/campaigns-update/:id" element={<CampaignPut />} />

                <Route path='/sign-in' element={<SignIn />}></Route>

                <Route path='/sign-up' element={<SignUp />}></Route>
            </Routes>

        </div>
    );

};

export default CustomerRouters;