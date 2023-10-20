import { useState } from "react";
import Swal from "sweetalert2";
const Subscribe = () => {


    const [email, setEmail] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        setIsButtonDisabled(!newEmail || !isValidEmail(newEmail));
    };

    const isValidEmail = (email) => {
    
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const handleSubscribe = () => {
        Swal.fire(
            'Subscribed Successfully!',
            'Check mails for our lates discounts and update infos',
            'success',
        )
        console.log('Subscribed with email:', email);
        setEmail(''); 
        setIsButtonDisabled(true);
    };

    return (
        <div className="bg-gray-100 p-4 text-center">
            <h2 className="text-3xl font-semibold font-mono mb-5">Subscribe for Updates</h2>
            <p className="text-gray-600 mb-2">Stay in the loop with our latest products and offers.</p>
            <div className="flex justify-center mb-10">
                <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={handleEmailChange}
                    className="p-2 border border-gray-300 rounded-l-md w-64 focus:outline-none"
                    required 
                />
                <button
                    onClick={handleSubscribe}
                    className={`bg-blue-500 text-white rounded-r-md px-4 hover:bg-blue-600 focus:outline-none ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                    disabled={isButtonDisabled}
                >
                    Subscribe
                </button>
            </div>
        </div>
    );
    }

export default Subscribe;