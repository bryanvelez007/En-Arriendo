import {useState} from 'react'
import {useForm} from "react-hook-form";
import {Transition} from "@headlessui/react";


// Import icons svg //
import IconApartament from "../../assets/svg/icon-apartament";


/**
 * -- PROPS ENTRIES --
 * @fSumbmit prop Function
 * @textBtn String
 * @return Search
 */
export default function Search({fSumbmit, textBtn,isShow=true}) {
    const {register, handleSubmit} = useForm();
    const [valueSearch, setValueSearch] = useState({arrLocations: null, location: '', show: false});

    // Arr examples //
    const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

    /**
     * function filterLocations
     * @query String text to will search
     * @return array with the data filetered
     */
    const filterLocations = query => {
        return countries.filter((el) =>
            el.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    }


    /**
     * function autoCompleteLocation
     * @event event the element
     * Update the state (valueSearch), for each change in input search
     */
    const autoCompleteLocation = event => {
        const textToSearch = event.target.value;

        if (textToSearch === '' && valueSearch.show) {
            setValueSearch({...valueSearch, location: textToSearch, show: false})
        } else {
            const payload = filterLocations(textToSearch)
            setValueSearch({arrLocations: payload, location: textToSearch, show: true})
        }
    }


    /**
     * function SelectLocation
     * @event event the element
     * Selected and update state (valueSearch) the location clicked.
     */
    const SelectLocation = event => {
        const textLocation = event.target.text;

        setValueSearch({...valueSearch, location: textLocation, show: false})
    }


    return (
        <form onSubmit={handleSubmit((data) => fSumbmit(data))}
              className="md:flex md:justify-center grid grid-cols-1">

            <div className="relative rounded-md shadow-sm">

                {/** <!--Icon input.--> */}
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IconApartament/>
                </div>

                {/** <!--Input search.--> */}
                <input type="search"
                       name="location"
                       value={valueSearch.location}
                       onChange={(event => autoCompleteLocation(event))}
                       placeholder="Municipio, Barrio"
                       ref={register}
                       autoComplete="off"
                       className="focus:ring-primary focus:border-primary block w-full pl-12 pr-36 sm:text-sm border-gray-300 rounded-md"/>

                {/** <!--Dropdown autocomplete.--> */}
                {
                    Array.isArray(valueSearch.arrLocations) &&

                    <Transition
                        show={valueSearch.show}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div ref={ref}
                                 className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical"
                                     aria-labelledby="options-menu">

                                    {/** <!--Location options.--> */}
                                    {
                                        valueSearch.arrLocations.map((elem, key) =>
                                            <a key={key} onClick={(event) => SelectLocation(event)}
                                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                               role="menuitem">{elem}</a>
                                        )
                                    }

                                </div>
                            </div>
                        )}
                    </Transition>
                }


                {/** <!--Select category.--> */}
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="category" className="sr-only">Category</label>
                    <select name="category"
                            ref={register}
                            className="focus:ring-primary focus:primary h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                        <option>Apartamento</option>
                        <option>Casa</option>
                        <option>Local</option>
                        <option>Finca</option>
                    </select>
                </div>
            </div>

            {/** <!--Button search.--> */}
            {
                isShow && 
            <div className="my-3 md:my-0 mx-0 md:mx-5">
                <input
                    className="whitespace-nowrap w-full md:w-32 inline-flex items-center justify-center px-4 py-1.5 border border-transparent rounded-md shadow-sm text-base text-white bg-primary hover:bg-primaryDark"
                    value={textBtn}
                    type="submit"/>
            </div>
}   
        </form>
    );
}
