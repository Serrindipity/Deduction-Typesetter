// A component with a row of 4 text inputs and a hook that exports a string of the inputs
import { useState } from 'react'
import Select from 'react-select'
import './Row.css'

function Row(system) {
    const premiseName = "premises"
    const schemaName = "schema"
    const lineName = "line"
    const ruleName = "rule"

    const [currentSystem, setSystem] = useState(!system ? system : "poly")

    const tfdsOptions = [
        { value: 'P', label: 'P' },
        { value: 'D', label: 'D' },
        { value: 'MP', label: 'MP' },
        { value: 'MT', label: 'MT' },
        { value: 'DN', label: 'DN' },
        { value: 'W', label: 'W' },
    ];

    const tfdsPlusOptions = [
        { value: 'P', label: 'P' },
        { value: 'D', label: 'D' },
        { value: 'MP', label: 'MP' },
        { value: 'MT', label: 'MT' },
        { value: 'DN', label: 'DN' },
        { value: 'W', label: 'W' },
        { value: 'CNJ', label: 'CNJ' },
        { value: 'MCND', label: 'MCND' },
        { value: 'CA', label: 'CA' },
        { value: 'RAA', label: 'RAA' },
    ];

    const tfdsPlusPlusOptions = [
        { value: 'P', label: 'P' },
        { value: 'D', label: 'D' },
        { value: 'MP', label: 'MP' },
        { value: 'MT', label: 'MT' },
        { value: 'DN', label: 'DN' },
        { value: 'W', label: 'W' },
        { value: 'CNJ', label: 'CNJ' },
        { value: 'MCND', label: 'MCND' },
        { value: 'CA', label: 'CA' },
        { value: 'RAA', label: 'RAA' },
        { value: 'BIC', label: 'BIC' },
        { value: 'DIL', label: 'DIL' },
        { value: 'DM', label: 'DM' },
    ];

    const polyOptions = [
        { value: 'P', label: 'P' },
        { value: 'D', label: 'D' },
        { value: 'TF', label: 'TF' },
        { value: 'UI', label: 'UI' },
        { value: 'EG', label: 'EG' },
        { value: 'CQ', label: 'CQ' },
        { value: 'UG', label: 'UG' },
      ];

    const polyExtendedOptions = [
        { value: 'P', label: 'P' },
        { value: 'D', label: 'D' },
        { value: 'TF', label: 'TF' },
        { value: 'UI', label: 'UI' },
        { value: 'EG', label: 'EG' },
        { value: 'CQ', label: 'CQ' },
        { value: 'UG', label: 'UG' },
        { value: 'EI', label: 'EI' },
        { value: 'EII', label: 'EII' },
        { value: 'EIE', label: 'EIE' },
    ]

    const systems = {
        "poly" : polyOptions,
        "polyExtended" : polyExtendedOptions
    }
    
    const customSelectStyles = {
        control: (baseStyles, state) => ({
          ...baseStyles,
          boxShadow: state.isFocused ? "0 0 0 1px #blue" : "none", // Optional: Adds focus shadow
          minHeight: '35px',
          height: '35px',
          borderRadius: '1px',
          borderColor: '#858585',
          width: '50px',
          backgroundColor: '#3B3B3B',
          color: 'rgba(255, 255, 255, 0.87)',
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: 'rgba(255, 255, 255, 0.87)',
          width: '50px',
          color: 'black',
          zIndex: 9999 // To ensure the dropdown appears above all other content
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: 'rgba(255, 255, 255, 0.87)',
          color: 'black'
        })
      };

      console.log(customSelectStyles["menu"]["backgroundColor"])
    

    return (
        <div className="row">
            <input type="text" name={premiseName} className = {premiseName} size="5" placeholder="[P]"/>
            <input type="text" name={schemaName} className = {schemaName} placeholder="Schema"/>
            <input type="text" name={lineName} className = {lineName} size="5" placeholder="Line(s)"/>
            <Select id='rule' options={systems[currentSystem]} isSearchable={true} placeholder="Rule"
            styles= {customSelectStyles} components={{ IndicatorSeparator: () => null, DropdownIndicator: () => null}}
            />
        </div>
    )
}

//CSS Display inline-block and stick them in div

export default Row