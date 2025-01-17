import React from 'react';

const BirthdaySelector = () => {
    return (
        <div className="space-y-4" id="birthday_wrapper">
            <div className="mt-4 mb-4 flex items-center">
                <span className="text-lg font-medium">Date of birth</span>
                <a className="ml-4  text-indigo-600" id="birthday-help" href="#" title="Click for more information" role="button">
                    <i className="fas fa-info-circle"></i>
                </a>
            </div>
            <div className="flex space-x-2">
                <div>
                    <select aria-label="Day" name="birthday_day" id="day" title="Day" className="border border-gray-300 rounded-md p-2">
                        {[...Array(31)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <select aria-label="Month" name="birthday_month" id="month" title="Month" className="border border-gray-300 rounded-md p-2">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
                            <option key={i + 1} value={i + 1}>{month}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <select aria-label="Year" name="birthday_year" id="year" title="Year" className="border border-gray-300 rounded-md p-2">
                        {[...Array(115)].map((_, i) => {
                            const year = 2024 - i;
                            return <option key={year} value={year}>{year}</option>;
                        })}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default BirthdaySelector;
