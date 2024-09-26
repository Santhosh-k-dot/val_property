import React from 'react';

const locations = {
  Karnataka: {
    Bengaluru: {
      Residential: [
        'Koramangala',
        'Whitefield',
        'Indiranagar',
        'Jayanagar',
        'HSR Layout',
      ],
      Commercial: [
        'MG Road',
        'Electronic City',
        'Outer Ring Road',
        'Bannerghatta Road',
        'Yeshwanthpur',
      ],
    },
    Mysuru: {
      Residential: [
        'VV Mohalla',
        'Gokulam',
        'Jayalakshmipuram',
        'Siddhartha Layout',
        'Kuvempunagar',
      ],
      Commercial: [
        'Devaraja Mohalla',
        'Metagalli',
        'KRS Road',
        'Industrial Area',
        'Hebbal Industrial Estate',
      ],
    },
  },
  Maharashtra: {
    Mumbai: {
      Residential: [
        'South Mumbai',
        'Bandra',
        'Juhu',
        'Powai',
        'Goregaon',
      ],
      Commercial: [
        'Lower Parel',
        'BKC (Bandra Kurla Complex)',
        'Andheri East',
        'Vikhroli',
        'Malad West',
      ],
    },
    Pune: {
      Residential: [
        'Kothrud',
        'Baner',
        'Viman Nagar',
        'Koregaon Park',
        'Wakad',
      ],
      Commercial: [
        'Hinjewadi',
        'Kharadi',
        'Magarpatta',
        'Shivaji Nagar',
        'Yerawada',
      ],
    },
  },
};

const PropertyForm = ({ size, setSize, propertyType, setPropertyType, state, setState, city, setCity, area, setArea, secondArea, setSecondArea }) => {
  const handleStateChange = (e) => {
    setState(e.target.value);
    setCity('');
    setArea('');
    setSecondArea('');
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setArea('');
    setSecondArea('');
  };

  const compareAreas = () => {
    if (area && secondArea) {
      return area === secondArea ? 'Both areas are the same.' : `You selected ${area} and ${secondArea}.`;
    }
    return '';
  };

  return (
    <form className="p-2 bg-light rounded shadow-sm d-flex flex-column align-items-center" style={{ width: '100%' }}>
      {/* Property Size Input */}
      <div className="form-group mb-2 w-100">
        <label htmlFor="size" className="small mb-1">Property Size (sq ft)</label>
        <input
          type="number"
          id="size"
          className="form-control"
          min="500"
          max="5000"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          style={{ height: '30px' }}
          placeholder="Enter size (500 - 5000 sq ft)"
          required
        />
        <p className="text-center mt-1 small">{size} sq ft</p>
      </div>

      {/* State Select */}
      <div className="form-group mb-2 w-100">
        <label htmlFor="state" className="small mb-1">State</label>
        <select
          id="state"
          className="form-control"
          value={state}
          onChange={handleStateChange}
          style={{ height: '30px' }}
          required
        >
          <option value="">Select State</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Maharashtra">Maharashtra</option>
        </select>
      </div>

      {/* City Select */}
      <div className="form-group mb-2 w-100">
        <label htmlFor="city" className="small mb-1">City</label>
        <select
          id="city"
          className="form-control"
          value={city}
          onChange={handleCityChange}
          style={{ height: '30px' }}
          disabled={!state}
          required
        >
          <option value="">Select City</option>
          {state && Object.keys(locations[state]).map((cityName) => (
            <option key={cityName} value={cityName}>{cityName}</option>
          ))}
        </select>
      </div>

      {/* Property Type Select */}
      <div className="form-group mb-2 w-100">
        <label htmlFor="propertyType" className="small mb-1">Property Type</label>
        <select
          id="propertyType"
          className="form-control"
          value={propertyType}
          onChange={(e) => {
            setPropertyType(e.target.value);
            setArea('');
            setSecondArea('');
          }}
          style={{ height: '30px' }}
        >
          <option value="Commercial">Commercial</option>
          <option value="Residential">Residential</option>
        </select>
      </div>

      {/* First Area Select */}
      <div className="form-group mb-2 w-100">
        <label htmlFor="area" className="small mb-1">First Area</label>
        <select
          id="area"
          className="form-control"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          style={{ height: '30px' }}
          disabled={!city || !propertyType}
          required
        >
          <option value="">Select First Area</option>
          {city && locations[state][city][propertyType].map((areaName) => (
            <option key={areaName} value={areaName}>{areaName}</option>
          ))}
        </select>
      </div>

      {/* Second Area Select */}
      <div className="form-group mb-2 w-100">
        <label htmlFor="secondArea" className="small mb-1">Second Area</label>
        <select
          id="secondArea"
          className="form-control"
          value={secondArea}
          onChange={(e) => setSecondArea(e.target.value)}
          style={{ height: '30px' }}
          disabled={!city || !propertyType || !area}
          required
        >
          <option value="">Select Second Area</option>
          {city && locations[state][city][propertyType].map((areaName) => (
            <option key={areaName} value={areaName}>{areaName}</option>
          ))}
        </select>
      </div>

      {/* Comparison Result */}
      <div className="mt-2">
        <p>{compareAreas()}</p>
      </div>
    </form>
  );
};

export default PropertyForm;
