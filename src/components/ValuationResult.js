import React from 'react';

const ValuationResult = ({ valuation, secondValuation }) => {
  // Check which property has a higher value for comparison
  const isFirstBetter = valuation > secondValuation;
  const isSecondBetter = valuation < secondValuation;

  return (
    <div className="text-center p-4 bg-success text-white rounded shadow-lg mb-4">
      <h3 className="mb-2">Estimated Property Values</h3>

      {/* First Property Valuation */}
      <div className="mb-4">
        <h4>First Property Valuation</h4>
        <h2 className="font-weight-bold" aria-live="polite">
          ₹ {valuation.toLocaleString()}
        </h2>
      </div>

      {/* Second Property Valuation */}
      {secondValuation > 0 && (
        <div className="mb-4">
          <h4>Second Property Valuation</h4>
          <h2 className="font-weight-bold" aria-live="polite">
            ₹ {secondValuation.toLocaleString()}
          </h2>
        </div>
      )}

      {/* Comparison between both properties */}
      {secondValuation > 0 && (
        <div className="mt-3">
          <h4>Comparison</h4>
          <h5 className={isFirstBetter ? 'text-success' : 'text-danger'}>
            {isFirstBetter ? 'The first property is better!' : isSecondBetter ? 'The second property is better!' : 'Both properties have the same value!'}
          </h5>
          <p>
            First Property Valuation: ₹ {valuation.toLocaleString()}<br />
            Second Property Valuation: ₹ {secondValuation.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default ValuationResult;
