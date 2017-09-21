import REGEX from './regex';

const keyNames = {
    coopAddress:   {name: 'coopAddress',   placeholder: 'Adres',        regex: REGEX.address},
    coopCity:      {name: 'coopCity',      placeholder: 'Miasto',       regex: REGEX.cityName},
    coopName:      {name: 'coopName',      placeholder: 'Pełna nazwa',  regex: REGEX.companyName},
    coopShortName: {name: 'coopShortName', placeholder: 'Krótka nazwa', regex: REGEX.companyName},
    coopZIP:       {name: 'coopZIP',       placeholder: 'Kod pocztowy', regex: REGEX.zipCode}
}

export default keyNames
