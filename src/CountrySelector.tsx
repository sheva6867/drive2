import {CountryDropdown, RegionDropdown} from 'react-country-region-selector';
import * as React from "react";
import {useFormikContext} from "formik";
import './CountrySelector.scss'

interface Props {
    countryValue: string;
    regionValue: string;

}

function CountrySelector({countryValue, regionValue}: Props) {
    const {handleChange, setValues, setFieldValue} = useFormikContext()

    // const [countryData, setCountryData] = useState({
    //     country: '',
    //     region: ''
    // })
    // const selectCountry = (value: string) => {
    //     setCountryData({...countryData, country: value});
    // }
    // const selectRegion = (value: string) => {
    //     setCountryData({...countryData, region: value});
    // }
    // const {country, region} = countryData;
    return (
        <div>
            <div className={'country-drop'}>
                <label htmlFor="country">Моя страна</label>
                <CountryDropdown
                    classes={'country'}
                    value={countryValue}
                    name={'country'}
                    onChange={(value) => setFieldValue('country', value)}/>
            </div>
            <div className={'region-drop'}>
                <label htmlFor="city">Мой город</label>
                <RegionDropdown
                    country={countryValue}
                    classes={''}
                    value={regionValue}
                    name={'region'}
                    onChange={(value) => setFieldValue('region', value)}/>
            </div>
        </div>
    )
}

export default CountrySelector;