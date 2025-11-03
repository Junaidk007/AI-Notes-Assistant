import Navbar from './Navbar.jsx';
import HomePage from './HomePage.jsx'
import Footer from './Footer.jsx'
import { MyContext } from './MyContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HistoryPage from './HistoryPage.jsx';
import { useState } from 'react';

function App() {
    const [prompt, setPrompt] = useState("");
    const [reply, setReply] = useState(null);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState(true);
    let [option, setOption] = useState(null);
    let [count, setCount] = useState(null);
    let [note, setNote] = useState(null);
    let [isOpen, setIsOpen] = useState(false);
    const providerValues = {
        prompt, setPrompt,
        reply, setReply,
        loading, setLoading,
        title, setTitle,
        option, setOption,
        count, setCount,
        note, setNote,
        isOpen, setIsOpen
    }
    return (
        <div>
            <MyContext.Provider value={providerValues}>
                <BrowserRouter>
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path='/' element={<HomePage />}></Route>
                            <Route path='/history' element={<HistoryPage />}></Route>
                        </Routes>
                    </main>
                    <Footer />
                </BrowserRouter>

            </MyContext.Provider>
        </div>
    );
}

export default App;